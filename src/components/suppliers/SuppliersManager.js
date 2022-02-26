import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteSupplier,
  createNewSupplier,
} from "../../store/selectSupplierReducer";
import SupplierInformationUpdate from "./SupplierInformationUpdate";

function SuppliersManager() {
  const dispatch = useDispatch();
  const [dni, setDNI] = useState("");
  const [name, setName] = useState("");
  const [contact1, setContact1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const { supplierToDelete } = useSelector((state) => {
    return {
      supplierToDelete: state.selectSupplierReducer.supplierToDelete,
    };
  });

  const handleCreate = (e) => {
    dispatch(
      createNewSupplier(dni, name, contact1, email1, phone1, country, city)
    );
  };

  const handleDelete = () => {
    dispatch(deleteSupplier(supplierToDelete));
  };

  return (
    <div>
      <div>
        <h6>To create a new supplier, fill out the following form.</h6>
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
            Business Name *
          </span>
          <input
            autoFocus
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
          <span className="input-group-text">Country and city</span>
          <input
            id="country "
            type="text"
            aria-label="country"
            className="form-control"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
          <input
            id="city"
            type="text"
            aria-label="city"
            className="form-control"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="lastname">
            Contact Name *
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
            Contact Email *
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
            Contact Phone *
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

        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleCreate}
          >
            Create New Supplier
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#supplierUpdateModal"
            className="btn btn-outline-secondary"
            style={{ marginLeft: 10 }}
          >
            Update Supplier
          </button>
        </div>
        <hr />
        <h6>
          To delete a supplier, select it in the table and then click the button
        </h6>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleDelete}
          >
            Delete Supplier
          </button>
        </div>
      </div>
      <SupplierInformationUpdate />
    </div>
  );
}

export default SuppliersManager;
