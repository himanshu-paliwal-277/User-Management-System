import { useEffect, useState } from "react";
import store from "../store/state";
import User from "../components/User";
import Popup from "reactjs-popup";
import UserForm from "../components/UserForm";
import { ToastContainer } from "react-toastify";

function HomePage() {
  const { users, fetchAllUsers } = store();
  const [isAddUserPopupOpen, setIsAddUserPopupOpen] = useState(false);
  const [isEditUserPopupOpen, setIsEditUserPopupOpen] = useState(false);
  const [isDeleteUserPopupOpen, setIsDeleteUserPopupOpen] = useState(false);
  const { addUser, updateUser, deleteUser } = store();
  const [editableUser, setEditableUser] = useState({});
  const [userToBeDeleted, setUserToBeDeleted] = useState({});

  useEffect(() => {
    async function fetchData() {
      await fetchAllUsers();
      console.log("users data = ", users);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSaveUser(name, email, dateOfBirth) {
    // setIsAddUserPopupOpen(false);
    async function saveUser() {
      await addUser(name, email, dateOfBirth);
      fetchAllUsers();
      setTimeout(() => {
        setIsAddUserPopupOpen(false);
      }, 500);
    }
    saveUser();
  }

  function handleEditUser(name, email, dateOfBirth) {
    // setIsAddUserPopupOpen(false);
    async function editUser() {
      const updatedUserData = { name, email, dateOfBirth };
      console.log("updatedUserData = ", updatedUserData);
      await updateUser(editableUser._id, updatedUserData);
      fetchAllUsers();
      setTimeout(() => {
        setIsEditUserPopupOpen(false);
      }, 500);
    }
    editUser();
  }

  async function deleteUserFromList() {
    await deleteUser(userToBeDeleted._id);
    setIsDeleteUserPopupOpen(false);
  }

  return (
    <>
      <div className="px-12">
        {/* <h1>User List</h1> */}
        <button
          className="px-4 py-2 my-4 font-semibold text-white bg-green-500 rounded hover:scale-[1.01] active:scale-100"
          onClick={() => {
            console.log("add new user");
            setIsAddUserPopupOpen(true);
          }}
        >
          Add New User
        </button>
        <table className="flex flex-col border-[1px] border-gray-300 rounded-lg overflow-hidden mb-5">
          <thead className="text-white bg-sky-500 ">
            <tr className="flex justify-between py-4 text-lg ">
              <th className="w-[25%] text-center">Name</th>
              <th className="w-[25%] text-center">Email</th>
              <th className="w-[25%] text-center">Date of Birth</th>
              <th className="w-[25%] text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {users?.map((user) => (
              <tr
                key={user._id}
                className="flex justify-between flex-1 w-full py-2 border-b-[1px]  border-gray-300"
              >
                <User
                  user={user}
                  onEdit={() => {
                    console.log("edit");
                    setIsEditUserPopupOpen(true);
                    setEditableUser(user);
                  }}
                  onDelete={() => {
                    console.log("delete");
                    setIsDeleteUserPopupOpen(true);
                    setUserToBeDeleted(user);
                  }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add new user pop up */}
      <Popup
        open={isAddUserPopupOpen}
        onClose={() => setIsAddUserPopupOpen(false)}
        position="top right"
        closeOnDocumentClick
        overlayStyle={{ background: "#00000030" }}
      >
        <div className="flex flex-col items-center px-12 py-8 bg-white shadow-xl rounded-xl ">
          <h1 className="mb-8 text-2xl font-semibold">New User</h1>
          <UserForm onSave={handleSaveUser} />
        </div>
      </Popup>

      {/* edit user pop up */}
      <Popup
        open={isEditUserPopupOpen}
        onClose={() => setIsEditUserPopupOpen(false)}
        position="top right"
        closeOnDocumentClick
        overlayStyle={{ background: "#00000030" }}
      >
        <div className="flex flex-col items-center px-12 py-10 bg-white shadow-xl rounded-xl">
          <h1 className="mb-8 text-2xl font-semibold">Edit User</h1>
          <UserForm user={editableUser} onSave={handleEditUser} />
          {console.log("editableUser = ", editableUser)}
        </div>
      </Popup>

      {/* delete user pop up */}
      <Popup
        open={isDeleteUserPopupOpen}
        onClose={() => setIsDeleteUserPopupOpen(false)}
        position="top right"
        closeOnDocumentClick
        overlayStyle={{ background: "#00000030" }}
      >
        <div className="flex flex-col items-center px-12 py-10 bg-white shadow-xl rounded-xl">
          <p className="text-lg">Are you sure you want to delete this user?</p>
          <div className="flex flex-col gap-4 mt-6 text-sm">
            <button
              className="px-4 py-2 font-semibold text-white bg-red-500 rounded hover:scale-[1.01] active:scale-100"
              onClick={() => {
                console.log("delete");
                deleteUserFromList();
              }}
            >
              Yes, Delete
            </button>
            <button
              className="px-4 py-2  font-semibold text-white bg-gray-500 rounded hover:scale-[1.01] active:scale-100"
              onClick={() => setIsDeleteUserPopupOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Popup>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default HomePage;
