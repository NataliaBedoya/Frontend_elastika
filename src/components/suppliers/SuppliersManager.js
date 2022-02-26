import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createNewSupplier,
} from "../../store/selectSupplierReducer";

function SuppliersManager() {
  const dispatch = useDispatch();
  const [dni, setDNI] = useState("");
  const [name, setName] = useState("");
  const [contact1, setContact1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleCreate = (e) => {
    dispatch(
      createNewSupplier(dni, name, contact1, email1, phone1, country, city)
    );
  };

  return (
    <div
      className="modal fade"
      id="uploadSupplier"
      aria-labelledby="uploadCostumerLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="uploadCostumerLabel">Upload new costumer</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
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
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button onClick={handleCreate} type="button" className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuppliersManager;