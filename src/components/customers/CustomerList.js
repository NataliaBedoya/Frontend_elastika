import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Options from "../../assets/images/menu.png";
import { assignCustomerToUpdate, deleteAdditionalContact, deleteCustomer } from "../../store/selectCustomerReducer";
import Paginator from "../general/Paginator";

function CustomerList() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [items, setItems] = useState(5);

  const { customerList } = useSelector((state) => {
    const arr = state.selectCustomerReducer.customerList;
    let section = 0;
    const newArr = [];
    let innerArr = [];

    arr.forEach((row, i) => {
      innerArr.push(row)
      if(i === ((section + 1)*items - 1) || i === arr.length - 1) {
        newArr.push(innerArr);
        innerArr = [];
        section++
      }
    })
    
    return {
      customerList: newArr,
    };
  });

  const handleUpdate = (customer) => {
    dispatch(assignCustomerToUpdate(customer))
  }

  const handleDelete = (customerId) => {
    dispatch(deleteCustomer(customerId));
  }

  const handleDeleteContact = (customerId) => {
    dispatch(deleteAdditionalContact(customerId));
  };

  const renderTable = () => {
    return (
      !!customerList &&
      customerList.length > 0 &&
      customerList[page].map((customer) => {
        return (
          <tr key={customer._id}>
            <td style={{ width: "10%", textAlign: 'center' }}>
              <div className="dropdown">
                <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img width="15px" alt="options" src={Options} />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#customersUpdateModal"
                    href="#customersUpdateModal"
                    onClick={() => handleUpdate(customer)}
                  >
                    Update
                  </a></li>
                  <li><a
                    className="dropdown-item"
                    href="#delete"
                    onClick={() => handleDelete(customer._id)}
                  >
                    Delete
                  </a></li>
                  <li><a
                    className="dropdown-item"
                    href="#delete-contact"
                    onClick={() => handleDeleteContact(customer._id)}
                  >
                    Delete additional contact
                  </a></li>
                </ul>
              </div>
            </td>
            <td style={{ width: "25%" }}>
              <p>
                {customer.name}
                <br />
                {customer.businessPhone}
              </p>
            </td>
            <td style={{ width: "25%" }}>
              <p>
                {customer.contact1} <br />
                {customer.contact2}
              </p>
            </td>
            <td style={{ width: "20%" }}>
              <p>
                {customer.email1} <br />
                {customer.email2}
              </p>
            </td>
            <td style={{ width: "20%" }}>
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
    <div style={{ width: "90%" }} className="table-responsive">
      <table className="table table-striped">
        <caption>List of customers</caption>
        <thead>
          <tr>
            <th style={{ width: "10%", textAlign: 'center' }}>Actions</th>
            <th style={{ width: "25%" }}>Business Name</th>
            <th style={{ width: "25%" }}>Contact Name</th>
            <th style={{ width: "20%" }}>Email</th>
            <th style={{ width: "20%" }}>Phone</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Paginator page={page} setPage={setPage} totalPages={customerList}/>
    </div>
  );
}

export default CustomerList;
