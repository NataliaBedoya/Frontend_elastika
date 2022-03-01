import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommit } from "../../store/selectMaterialReducer";

function DeleteAssignment() {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState("default");
  const [order, setOrder] = useState("default");

  const { customerList, commitByMaterial } = useSelector((state) => {
    return {
      commitByMaterial: state.selectReportReducer.commitByMaterial,
      customerList: state.selectCustomerReducer.customerList,
    };
  });

  const orderList = commitByMaterial.filter(
    (commit) => commit.customer._id === customer
  );

  const handleDelete = () => {
    dispatch(deleteCommit(order));
  };

  const onSave = () => {
    const modalEl = document.getElementById("deleteAssignmentModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleDelete();
      }}
    >
      <div
        className="modal fade"
        id="deleteAssignmentModal"
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
                Delete assignment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6>Select the customer</h6>

              <select
                className="form-select"
                id="customer"
                aria-label="Example select with button addon"
                onChange={(e) => setCustomer(e.target.value)}
                value={customer}
              >
                <option value="default"> Choose a customer * </option>
                {!!customerList &&
                  customerList.length > 0 &&
                  customerList.map((customer) => (
                    <option value={customer._id}>{customer.name}</option>
                  ))}
              </select>
              <hr />
              <h6>Select the purchase order *</h6>

              <select
                className="form-select"
                id="customer"
                aria-label="Example select with button addon"
                onChange={(e) => setOrder(e.target.value)}
                value={order}
              >
                <option value="default"> Choose an order * </option>
                {!!orderList &&
                  orderList.length > 0 &&
                  orderList.map((order) => (
                    <option value={order._id}>{order.order}</option>
                  ))}
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={onSave}
              >
                Delete
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

export default DeleteAssignment;
