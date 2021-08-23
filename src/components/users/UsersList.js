import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignUserToDelete, getAllUser } from "../../store/selectUserReducer";

function UsersList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignUserToDelete(id));
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
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>
              <input
                type="radio"
                id={user._id}
                name="userToDelete"
                value={user._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td style={{ width: "35%", textAlign: "center" }}>
              {user.name} {user.lastname}
            </td>
            <td style={{ width: "35%", textAlign: "center" }}>{user.role}</td>
            <td style={{ width: "30%", textAlign: "center" }}>{user.email}</td>
          </tr>
        );
      })
    );
  };

  return (
    <div class="table-responsive">
      <table className="table table-striped">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>Select</th>
            <th style={{ width: "35%", textAlign: "center" }}>User Name</th>
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
