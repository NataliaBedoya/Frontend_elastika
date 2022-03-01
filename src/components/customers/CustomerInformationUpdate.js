import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerProfileInfo } from "../../store/selectCustomerReducer";

function CustomerInformationUpdate() {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.selectCustomerReducer.customerToUpdate);

  const [businessPhone, setBusinessPhone] = useState(customer.businessPhone);
  const [contact1, setContact1] = useState(customer.contact1);
  const [email1, setEmail1] = useState(customer.email1);
  const [phone1, setPhone1] = useState(customer.phone1);

  useEffect(() => {
    setBusinessPhone(customer.businessPhone);
    setContact1(customer.contact1);
    setEmail1(customer.email1);
    setPhone1(customer.phone1);
  }, [customer])

  const handleUpdate = () => {
    dispatch(
      updateCustomerProfileInfo(
        customer._id,
        businessPhone,
        contact1,
        email1,
        phone1
      )
    );
  };
  const onSave = () => {
    const modalEl = document.getElementById("customersUpdateModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
    >
      <div
        className="modal fade"
        id="customersUpdateModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Customer Information Update
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="businessPhone">
                <strong> Business Phone: </strong>
              </label>
              <input
                id="businessPhone"
                type="text"
                name="businessPhone"
                className="form-control"
                onChange={(e) => setBusinessPhone(e.target.value)}
                value={businessPhone}
              />
              <label htmlFor="contact1">
                <strong> Contact Name: </strong>
              </label>
              <input
                id="contact1"
                type="text"
                name="contact1"
                className="form-control"
                onChange={(e) => setContact1(e.target.value)}
                value={contact1}
              />
              <label htmlFor="email1">
                <strong> Contact Email: </strong>
              </label>
              <input
                id="email1"
                type="text"
                name="email1"
                className="form-control"
                onChange={(e) => setEmail1(e.target.value)}
                value={email1}
              />
              <label htmlFor="phone1">
                <strong> Contact Phone: </strong>
              </label>
              <input
                id="phone1"
                type="text"
                name="phone1"
                className="form-control"
                onChange={(e) => setPhone1(e.target.value)}
                value={phone1}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onSave}
                >
                  Update
                </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CustomerInformationUpdate;
