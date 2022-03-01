import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UsersManager from "../components/users/UsersManager";
import UsersList from "../components/users/UsersList";
import UserInformationUpdate from "../components/users/UserInformationUpdate";

import { getAllUser } from "../store/selectUserReducer";

import "../styles/UsersView.css";

function UsersView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return (
    <div className="UsersView">
      <div className="UsersView-header">
        <h2>Users Manager</h2>
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#uploadUser"
        >
          Create user
        </button>
      </div>
      <UsersManager />
      <UserInformationUpdate />
      <UsersList />
    </div>
  );
}

export default UsersView;
