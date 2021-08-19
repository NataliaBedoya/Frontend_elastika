import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import {
//   deleteMaterial,
//   createNewMaterial,
// } from "../../store/selectMaterialReducer";

function CommittedProductManager() {
  const dispatch = useDispatch();
  const [material, setMaterial] = useState("");
  const [amount, setAmount] = useState("");
  const [customer, setCustomer] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  // const { materialToDelete } = useSelector((state) => {
  //   return {
  //     materialToDelete: state.selectMaterialReducer.materialToDelete,
  //   };
  // });

  const handleAssign = (e) => {
    console.log("assign");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div>
      <div>
        <h6>
          To commit a material to a customer, fill out the following form.
        </h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="material">
            Material
          </span>
          <input
            autoFocus
            id="material"
            type="text"
            className="form-control"
            aria-label="material"
            aria-describedby="basic-addon1"
            onChange={(e) => setMaterial(e.target.value)}
            value={material}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="amount">
            Amount (kg)
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
            Customer
          </span>
          <input
            id="customer"
            type="text"
            className="form-control"
            aria-label="customer"
            aria-describedby="basic-addon1"
            onChange={(e) => setCustomer(e.target.value)}
            value={customer}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="date">
            Date
          </span>
          <input
            id="date"
            type="date"
            className="form-control"
            aria-label="date"
            aria-describedby="basic-addon1"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="notes">
            Notes
          </span>
          <input
            id="notes"
            type="text"
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
          To delete an assignment, select it in the table and then click the
          button
        </h6>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleDelete}
          >
            Delete Assignment
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommittedProductManager;
