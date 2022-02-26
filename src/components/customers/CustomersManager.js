import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createNewCustomer,
} from "../../store/selectCustomerReducer";

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

  return (
      <div 
        className="modal fade"
        id="uploadCostumer"
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
              <div>
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

export default CustomersManager;
