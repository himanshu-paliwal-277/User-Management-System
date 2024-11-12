function DeleteModal({ onClose, onConfirm }) {
  return (
    <>
      <div className="">
        <p>Are you sure you want to delete this user?</p>
        <button onClick={onConfirm}>Yes, Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>
  );
}

export default DeleteModal;
