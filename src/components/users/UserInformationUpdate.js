import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserProfileInfo } from "../../store/selectUserReducer";

function UserInformationUpdate() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = () => {
    dispatch(updateUserProfileInfo(name, lastname, role, password));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
    >
      <div
        className="modal fade"
        id="userUpdateModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Personal Information Update
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name" style={{ color: "black" }}>
                <strong> Name: </strong>
              </label>
              <input
                autoFocus
                id="name"
                type="text"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="lastname" style={{ color: "black" }}>
                <strong> Lastname: </strong>
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                className="form-control"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
              <label htmlFor="role" style={{ color: "black" }}>
                <strong> Role: </strong>
              </label>
              <input
                id="role"
                type="text"
                name="role"
                className="form-control"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              />
              <label htmlFor="password" style={{ color: "black" }}>
                <strong> Password: </strong>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-outline-secondary">
                Update
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserInformationUpdate;
