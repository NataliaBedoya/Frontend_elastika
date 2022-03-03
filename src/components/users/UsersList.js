import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Options from "../../assets/images/menu.png";
import { assignUserToUpdate, deleteUser, getAllUser } from "../../store/selectUserReducer";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const handleUpdate = (user) => {
    dispatch(assignUserToUpdate(user));
  };

  const handleDelete = (userToDelete) => {
    dispatch(deleteUser(userToDelete));
  };

  const { userList } = useSelector((state) => {
    return {
      userList: state.selectUserReducer.userList,
    };
  });

  const renderTable = () => {
    return (
      !!userList &&
      userList.length > 0 &&
      userList.map((user) => {
        return (
          <tr key={user._id}>
            <td style={{ width: "10%", textAlign: 'center' }}>
              <div className="dropdown">
                <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img width="15px" alt="options" src={Options} />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#userUpdateModal"
                    href="#userUpdateModal"
                    onClick={() => handleUpdate(user)}
                  >
                    Update
                  </a></li>
                  <li><a
                    className="dropdown-item"
                    href="#delete"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </a></li>
                </ul>
              </div>
            </td>
            <td style={{ width: "30%", textAlign: "center" }}>
              {user.name} {user.lastname}
            </td>
            <td style={{ width: "30%", textAlign: "center" }}>{user.role}</td>
            <td style={{ width: "30%", textAlign: "center" }}>{user.email}</td>
          </tr>
        );
      })
    );
  };

  return (
    <div style={{ width: "90%" }} className="table-responsive">
      <table className="table table-striped">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th style={{ width: "10%", textAlign: "center" }}>Select</th>
            <th style={{ width: "30%", textAlign: "center" }}>User Name</th>
            <th style={{ width: "30%", textAlign: "center" }}>Role</th>
            <th style={{ width: "30%", textAlign: "center" }}>Email</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default UsersList;
