import { useEffect, useState } from "react";
import store from "../store/state";
import User from "../components/User";
import Popup from "reactjs-popup";

function HomePage() {
  const { users, fetchAllUsers } = store();
  const [isAddUserPopupOpen, setIsAddUserPopupOpen] = useState(false);
  const [isEditUserPopupOpen, setIsEditUserPopupOpen] = useState(false);
  const [isDeleteUserPopupOpen, setIsDeleteUserPopupOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetchAllUsers();
      console.log("users data = ", users);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <table className="flex flex-col border-[1px] border-gray-300 rounded-lg overflow-hidden">
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
                  key={user._id}
                  user={user}
                  onEdit={() => {
                    console.log("edit");
                    setIsEditUserPopupOpen(true);
                  }}
                  onDelete={() => {
                    console.log("delete");
                    setIsDeleteUserPopupOpen(true);
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
        <div className="flex flex-col items-center px-12 py-10 bg-white shadow-xl rounded-xl">
          Add new user pop up
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
          edit user pop up
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
          delete user pop up
        </div>
      </Popup>
    </>
  );
}

export default HomePage;
