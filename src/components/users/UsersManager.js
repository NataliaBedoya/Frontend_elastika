import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, createNewUser } from "../../store/selectUserReducer";
import UserInformationUpdate from "./UserInformationUpdate";

function UsersManager() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const { userToDelete } = useSelector((state) => {
    return {
      userToDelete: state.selectUserReducer.userToDelete,
    };
  });

  const handleCreate = (e) => {
    dispatch(createNewUser(name, lastname, email, role, password));
  };

  const handleDelete = () => {
    dispatch(deleteUser(userToDelete));
  };

  return (
    <div>
      <div>
        <h6>To create a new user, fill out the following form.</h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="name">
            Name*
          </span>
          <input
            autoFocus
            id="name"
            type="text"
            className="form-control"
            aria-label="username"
            aria-describedby="basic-addon1"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="lastname">
            Lastname*
          </span>
          <input
            id="lastname"
            type="text"
            className="form-control"
            aria-label="lastname"
            aria-describedby="basic-addon1"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="role">
            Role
          </span>
          <input
            id="role"
            type="text"
            className="form-control"
            aria-label="role"
            aria-describedby="basic-addon1"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="email">
            Email*
          </span>
          <input
            id="email"
            type="text"
            className="form-control"
            aria-label="email"
            aria-describedby="basic-addon1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="password">
            Password*
          </span>
          <input
            id="password"
            type="password"
            className="form-control"
            aria-label="password"
            aria-describedby="basic-addon1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="Users-button-container">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleCreate}
          >
            Create New User
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#userUpdateModal"
            className="btn btn-outline-secondary"
            style={{ marginLeft: 10 }}
          >
            Update User
          </button>
        </div>
        <hr />
        <h6>
          To delete a user, select it in the table and then click the button.
        </h6>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleDelete}
          >
            Delete User
          </button>
        </div>
      </div>
      <UserInformationUpdate />
    </div>
  );
}

export default UsersManager;
