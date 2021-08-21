import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCustomer,
  createNewCustomer,
} from "../../store/selectCustomerReducer";
import CustomerInformationUpdate from "./CustomerInformationUpdate";
import DeleteAdditionalContact from "./DeleteAdditionalContact";

function CustomersManager() {
  const dispatch = useDispatch();
  const [dni, setDNI] = useState("");
  const [name, setName] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [contact1, setContact1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [contact2, setContact2] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone2, setPhone2] = useState("");

  const { customerToDelete } = useSelector((state) => {
    return {
      customerToDelete: state.selectCustomerReducer.customerToDelete,
    };
  });

  const handleCreate = (e) => {
    dispatch(
      createNewCustomer(
        dni,
        name,
        businessPhone,
        contact1,
        email1,
        phone1,
        contact2,
        email2,
        phone2
      )
    );
  };

  const handleDelete = () => {
    dispatch(deleteCustomer(customerToDelete));
  };

  return (
    <div>
      <div>
        <h6>To create a new customer, fill out the following form.</h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="dni">
            NIT/RUT
          </span>
          <input
            autoFocus
            id="dni"
            type="text"
            className="form-control"
            aria-label="dni"
            aria-describedby="basic-addon1"
            onChange={(e) => setDNI(e.target.value)}
            value={dni}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="name">
            Business Name*
          </span>
          <input
            id="name"
            type="text"
            className="form-control"
            aria-label="name"
            aria-describedby="basic-addon1"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="businessPhone">
            Business Phone
          </span>
          <input
            id="businessPhone"
            type="text"
            className="form-control"
            aria-label="businessPhone"
            aria-describedby="basic-addon1"
            onChange={(e) => setBusinessPhone(e.target.value)}
            value={businessPhone}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="contact1">
            Contact Name*
          </span>
          <input
            id="contact1"
            type="text"
            className="form-control"
            aria-label="contact1"
            aria-describedby="basic-addon1"
            onChange={(e) => setContact1(e.target.value)}
            value={contact1}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="email1">
            Contact Email*
          </span>
          <input
            id="email1"
            type="text"
            className="form-control"
            aria-label="email1"
            aria-describedby="basic-addon1"
            onChange={(e) => setEmail1(e.target.value)}
            value={email1}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="phone1">
            Contact Phone*
          </span>
          <input
            id="phone1"
            type="text"
            className="form-control"
            aria-label="phone1"
            aria-describedby="basic-addon1"
            onChange={(e) => setPhone1(e.target.value)}
            value={phone1}
          />
        </div>
        <hr />
        <h6>Additional contact (optional)</h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="contact2">
            Contact Name
          </span>
          <input
            id="contact2"
            type="text"
            className="form-control"
            aria-label="contact2"
            aria-describedby="basic-addon1"
            onChange={(e) => setContact2(e.target.value)}
            value={contact2}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="email2">
            Contact Email
          </span>
          <input
            id="email2"
            type="text"
            className="form-control"
            aria-label="email2"
            aria-describedby="basic-addon1"
            onChange={(e) => setEmail2(e.target.value)}
            value={email2}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="phone2">
            Contact Phone
          </span>
          <input
            id="phone2"
            type="text"
            className="form-control"
            aria-label="phone2"
            aria-describedby="basic-addon1"
            onChange={(e) => setPhone2(e.target.value)}
            value={phone2}
          />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleCreate}
          >
            Create New Customer
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#customersUpdateModal"
            className="btn btn-outline-secondary"
            style={{ marginLeft: 10 }}
          >
            Update Customer
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteAdditionalContactModal"
            className="btn btn-outline-secondary"
            style={{ marginLeft: 10 }}
          >
            Delete Additional Contact
          </button>
        </div>
        <hr />
        <h6>
          To delete a customer, select it in the table and then click the button
        </h6>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleDelete}
          >
            Delete Customer
          </button>
        </div>
      </div>
      <CustomerInformationUpdate />
      <DeleteAdditionalContact />
    </div>
  );
}

export default CustomersManager;
