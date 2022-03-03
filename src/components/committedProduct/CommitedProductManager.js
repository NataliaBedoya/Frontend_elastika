import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignMaterialToCustomer } from "../../store/selectMaterialReducer";

import DeleteAssignment from "./DeleteAssignment";

function CommittedProductManager() {
  const dispatch = useDispatch();
  const [material, setMaterial] = useState("");
  const [amount, setAmount] = useState("");
  const [customer, setCustomer] = useState("");
  const [order, setOrder] = useState("");
  const [notes, setNotes] = useState("");
  const [assignmentDate, setAssignmentDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const { materialList, customerList } = useSelector((state) => {
    return {
      materialList: state.selectMaterialReducer.materialList,
      customerList: state.selectCustomerReducer.customerList,
    };
  });

  const handleAssign = (e) => {
    dispatch(
      assignMaterialToCustomer(
        material,
        amount,
        customer,
        order,
        notes,
        assignmentDate,
        deliveryDate,
        materialList
      )
    );
  };

  return (
    <div>
      <div>
        <h6>
          To commit a material to a customer, fill out the following form.
        </h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="material">
            Material *
          </span>

          <select
            className="form-select"
            id="material"
            aria-label="Example select with button addon"
            onChange={(e) => setMaterial(e.target.value)}
            value={material}
          >
            <option value=""> Choose a material</option>
            {!!materialList &&
              materialList.length > 0 &&
              materialList.map((material) => (
                <option value={material._id}>{material.name}</option>
              ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="amount">
            Amount (kg) *
          </span>
          <input
            id="amount"
            type="text"
            className="form-control"
            aria-label="amount"
            aria-describedby="basic-addon1"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="customer">
            Customer *
          </span>
          <select
            className="form-select"
            id="customer"
            aria-label="Example select with button addon"
            onChange={(e) => setCustomer(e.target.value)}
            value={customer}
          >
            <option value=""> Choose a customer</option>
            {!!customerList &&
              customerList.length > 0 &&
              customerList.map((customer) => (
                <option value={customer._id}>{customer.name}</option>
              ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="order">
            Purchase Order *
          </span>
          <input
            id="order"
            type="text"
            className="form-control"
            aria-label="order"
            aria-describedby="basic-addon1"
            onChange={(e) => setOrder(e.target.value)}
            value={order}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="assignmentDate">
            Assignment Date *
          </span>
          <input
            id="assignmentDate"
            type="date"
            defaultValue={new Date()}
            className="form-control"
            aria-label="assignmentDate"
            aria-describedby="basic-addon1"
            onChange={(e) => setAssignmentDate(e.target.value)}
            value={assignmentDate}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="deliveryDate">
            Delivery Date *
          </span>
          <input
            id="deliveryDate"
            type="date"
            min={assignmentDate}
            className="form-control"
            aria-label="deliveryDate"
            aria-describedby="basic-addon1"
            onChange={(e) => setDeliveryDate(e.target.value)}
            value={deliveryDate}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="notes">
            Notes
          </span>
          <input
            id="notes"
            type="textarea"
            className="form-control"
            aria-label="notes"
            aria-describedby="basic-addon1"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleAssign}
          >
            Assign Material
          </button>
        </div>
        <hr />
        <h6>
          To delete an assignment click the
          button
        </h6>
        <div>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteAssignmentModal"
            className="btn btn-outline-secondary"
          >
            Delete Assignment
          </button>
        </div>
      </div>
      <DeleteAssignment />
    </div>
  );
}

export default CommittedProductManager;
