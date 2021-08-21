import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdditionalContact } from "../../store/selectCustomerReducer";

function CustomerInformationUpdate() {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState("");

  const { customerList } = useSelector((state) => {
    return {
      customerList: state.selectCustomerReducer.customerList,
    };
  });

  const handleDeleteContact = () => {
    dispatch(deleteAdditionalContact(customer));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleDeleteContact();
      }}
    >
      <div
        className="modal fade"
        id="deleteAdditionalContactModal"
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
                Delete Additional Customer Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6>Select the customer to remove the additional contact.</h6>
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
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-outline-secondary">
                Select
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
