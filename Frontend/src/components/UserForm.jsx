import { useState } from "react";

// src/components/UserForm.jsx
function UserForm({ user = {}, onSave }) {
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');
    const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ name, email, dateOfBirth });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
