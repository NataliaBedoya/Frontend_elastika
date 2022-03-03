import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../store/selectUserReducer";

function UsersManager() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createNewUser(name, lastname, email, role, password));
  };

  return (
    <form onSubmit={handleCreate}>
      <div
        className="modal fade"
        id="uploadUser"
        aria-labelledby="uploadUserLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="uploadUserLabel">Upload new user</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h6>To create a new user, fill out the following form.</h6>
              <div className="input-group mb-3">
                <span className="input-group-text" id="name">
                  Name *
                </span>
                <input
                  autoFocus
                  required
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
                  Lastname *
                </span>
                <input
                  required
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
                  Role *
                </span>
                <select
                  className="form-select"
                  required
                  id="material"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                >
                  <option value=""> Choose a role</option>
                  <option value="admin">Admin</option>
                  <option value="internal">Internal commerce</option>
                  <option value="external">External commerce</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="email">
                  Email *
                </span>
                <input
                  id="email"
                  required
                  type="email"
                  className="form-control"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="password">
                  Password *
                </span>
                <input
                  id="password"
                  required
                  type="password"
                  className="form-control"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UsersManager;