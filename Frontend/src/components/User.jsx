function User({ user, onEdit, onDelete }) {
  return (
    <>
      <h3 className="w-[25%] text-center">{user.name}</h3>
      <p className="w-[25%] text-center">{user.email}</p>
      <p className="w-[25%] text-center">{new Date(user.dateOfBirth).toLocaleDateString()}</p>
      <div className="flex gap-3 w-[25%] justify-center">
      <button className="px-3 py-1 font-semibold text-white bg-yellow-500 rounded hover:scale-105 active:scale-95" onClick={() => onEdit(user)}>Edit</button>
      <button className="px-3 py-1 font-semibold text-white bg-red-500 rounded hover:scale-105 active:scale-95" onClick={() => onDelete(user._id)}>Delete</button>
      </div>
    </>
  );
}

export default User;
