import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";

// src/components/UserForm.jsx
function UserForm({ user = {}, onSave }) {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth || "");

  useEffect(() => {
    // Ensure the date is in the correct format ("YYYY-MM-DDT00:00:00.000Z")
    if (user.dateOfBirth && !dateOfBirth) {
      const date = new Date(user.dateOfBirth);
      setDateOfBirth(date.toISOString()); // Convert to ISO string
    }
  }, [user.dateOfBirth, dateOfBirth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ensure dateOfBirth is in the correct format before passing to onSave
    const formattedDateOfBirth = new Date(dateOfBirth).toISOString();
    onSave(name, email, formattedDateOfBirth);
  };

  const handleDateChange = (e) => {
    // When the user changes the date, ensure it's converted to the desired format
    const newDate = new Date(e.target.value);
    setDateOfBirth(newDate.toISOString());
  };

  return (
    <form className="flex flex-col gap-4 sm:w-[330px]" onSubmit={handleSubmit}>
      <TextField
        value={name}
        label="Name"
        variant="outlined"
        fullWidth
        onChange={(e) => setName(e.target.value)}
        required
        type="text"
      />
      <TextField
        value={email}
        label="Email"
        variant="outlined"
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
      />
      <TextField
        value={dateOfBirth.split('T')[0]} 
        label="Date Of Birth"
        variant="outlined"
        fullWidth
        onChange={handleDateChange}
        required
        type="date"
      />
      <div className="w-full mt-2">
        <Button fullWidth variant="outlined" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

export default UserForm;
