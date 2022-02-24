import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Options from "../../assets/images/menu.png";
import { assignCustomerToUpdate, deleteAdditionalContact, deleteCustomer } from "../../store/selectCustomerReducer";

function CustomerList() {
  const dispatch = useDispatch();

  const { customerList } = useSelector((state) => {
    return {
      customerList: state.selectCustomerReducer.customerList,
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
      customerList.map((customer) => {
        return (
          <tr key={customer._id}>
            <th style={{ width: "10%", minHeight: '50%', textAlign: 'center' }}>
            <div class="dropdown">
              <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img width="15px" alt="options" src={Options}/>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a
                  class="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#customersUpdateModal"
                  onClick={() => handleUpdate(customer)}
                  href="#"
                  >
                    Update
                  </a></li>
                <li><a
                  class="dropdown-item"
                  onClick={() => handleDelete(customer._id)}
                  href="#"
                  >
                    Delete
                  </a></li>
                <li><a
                  class="dropdown-item"
                  onClick={() => handleDeleteContact(customer._id)}
                  href="#"
                  >
                    Delete additional contact
                </a></li>
              </ul>
            </div>
            </th>
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
    <div style={{ width: "90%" }} class="table-responsive">
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
    </div>
  );
}

export default CustomerList;
