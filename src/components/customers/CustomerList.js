import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { assignCustomerToDelete } from "../../store/selectCustomerReducer";

function CustomerList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

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
            <th style={{ width: "5%", textAlign: "center" }}>
              <input
                type="radio"
                id={customer._id}
                name="customerToDelete"
                value={customer._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td style={{ width: "35%", textAlign: "center" }}>
              <p>
                {customer.name}
                <br />
                🏢{customer.businessPhone}{" "}
              </p>
            </td>
            <td style={{ width: "20", textAlign: "center" }}>
              <p>
                {customer.contact1} <br />
                {customer.contact2}
              </p>
            </td>
            <td style={{ width: "20", textAlign: "center" }}>
              <p>
                {customer.email1} <br />
                {customer.email2}
              </p>
            </td>
            <td style={{ width: "20", textAlign: "center" }}>
              <p>
                {customer.phone1} <br />
                {customer.phone2}
              </p>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div class="table-responsive">
      <table className="table table-striped">
        <caption>List of customers</caption>
        <thead>
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>Select</th>
            <th style={{ width: "35%", textAlign: "center" }}>Business Name</th>
            <th style={{ width: "20", textAlign: "center" }}>Contact Name</th>
            <th style={{ width: "20%", textAlign: "center" }}>Email</th>
            <th style={{ width: "20%", textAlign: "center" }}>Phone</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default CustomerList;
