import React from "react";

export const Modal = ({ onCancel, onSave, userId, title, body, onChangePosts, setUserId, setTitle, setBody }) => {
  const handleSave = () => {
    onSave();
    onCancel();
  };
  return (
    <div className="modal-container">
      <div className="modal-cont">
        <div className="add-post-input">
          <div>
            <label htmlFor="userId">User Id: </label>
            <input type="text" defaultValue={userId} id="userId" onChange={(e) => setUserId(e.target.value)} />
          </div>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" defaultValue={title} id="title" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <textarea name="body" defaultValue={body} id="body" cols="30" rows="10" onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
        </div>
        <div>
          <button onClick={() => onCancel()} style={{ marginRight: "1rem" }}>
            Cancel
          </button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};
