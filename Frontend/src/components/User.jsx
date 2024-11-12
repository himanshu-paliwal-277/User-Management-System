function User({ user, onEdit, onDelete }) {
  return (
    <>
      <h3 className="w-[25%] text-center">{user.name}</h3>
      <p className="sm:w-[25%] w-[35%] text-center overflow-x-auto">{user.email}</p>
      <p className="w-[25%] text-center">{new Date(user.dateOfBirth).toLocaleDateString()}</p>
      <div className="flex sm:flex-row flex-col sm:gap-3 gap-1 sm:w-[25%] w-[15%] justify-center sm:text-sm text-xs">
      <button className="px-3 py-1 font-semibold text-white bg-yellow-500 rounded hover:scale-105 active:scale-95" onClick={() => onEdit(user)}>Edit</button>
      <button className="px-2 py-1 font-semibold text-white bg-red-500 rounded sm:px-3 hover:scale-105 active:scale-95" onClick={() => onDelete(user._id)}>Delete</button>
      </div>
    </>
  );
}

export default User;
