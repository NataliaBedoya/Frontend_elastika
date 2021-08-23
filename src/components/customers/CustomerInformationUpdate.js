import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerProfileInfo } from "../../store/selectCustomerReducer";

function CustomerInformationUpdate() {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [contact1, setContact1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");

  const { customerList } = useSelector((state) => {
    return {
      customerList: state.selectCustomerReducer.customerList,
    };
  });

  const handleUpdate = () => {
    dispatch(
      updateCustomerProfileInfo(
        customer,
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
              <h6>Select the customer you want to update.</h6>

              <select
                class="form-select"
                id="customer"
                aria-label="Example select with button addon"
                onChange={(e) => setCustomer(e.target.value)}
              >
                <option selected> Choose a customer</option>
                {!!customerList &&
                  customerList.length > 0 &&
                  customerList.map((customer) => (
                    <option value={customer._id}>{customer.name}</option>
                  ))}
              </select>
              <hr />
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
                type="submit"
                className="btn btn-outline-secondary"
                onClick={onSave}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CustomerInformationUpdate;
