import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllCustomer,
  assignCustomerToDelete,
} from "../../store/selectCustomerReducer";

function CustomerList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCustomer());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignCustomerToDelete(id));
  };

  const { customerList } = useSelector((state) => {
    return {
      customerList: state.selectCustomerReducer.customerList,
    };
  });

  const renderTable = () => {
    return (
      !!customerList &&
      customerList.length > 0 &&
      customerList.map((customer) => {
        return (
          <tr>
            <th>
              <input
                type="radio"
                id={customer._id}
                name="customerToDelete"
                value={customer._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>{customer.name}</td>
            <td>{customer.contact1}</td>
            <td>{customer.email1}</td>
            <td>{customer.phone1}</td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table table-striped">
      <caption>List of customers</caption>
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default CustomerList;
