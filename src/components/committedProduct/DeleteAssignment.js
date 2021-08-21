import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommit } from "../../store/selectMaterialReducer";

function DeleteAssignment() {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState("");
  const [order, setOrder] = useState("");

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
                class="form-select"
                id="customer"
                aria-label="Example select with button addon"
                onChange={(e) => setCustomer(e.target.value)}
              >
                <option selected> Choose a customer * </option>
                {!!customerList &&
                  customerList.length > 0 &&
                  customerList.map((customer) => (
                    <option value={customer._id}>{customer.name}</option>
                  ))}
              </select>
              <hr />
              <h6>Select the purchase order *</h6>

              <select
                class="form-select"
                id="customer"
                aria-label="Example select with button addon"
                onChange={(e) => setOrder(e.target.value)}
              >
                <option selected> Choose an order * </option>
                {!!orderList &&
                  orderList.length > 0 &&
                  orderList.map((order) => (
                    <option value={order._id}>{order.order}</option>
                  ))}
              </select>
              {/* <label htmlFor="order">
                <strong> Purchase Order * </strong>
              </label>
              <input
                id="order"
                type="text"
                name="order"
                className="form-control"
                onChange={(e) => setOrder(e.target.value)}
                value={order}
              /> */}
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-outline-secondary">
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
