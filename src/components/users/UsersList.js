import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser, assignUserToDelete } from "../../store/selectUserReducer";

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
            <th>
              <input
                type="radio"
                id={user._id}
                name="userToDelete"
                value={user._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>
              {user.name} {user.lastname}
            </td>
            <td>{user.role}</td>
            <td>{user.email}</td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table table-striped">
      <caption>List of users</caption>
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default UsersList;
