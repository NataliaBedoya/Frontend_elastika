import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerMaterialInTransit } from "../../store/selectMaterialReducer";

function CommittedProductManager() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [supplier, setSupplier] = useState("");
  const [material, setMaterial] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [shipmentDate, setShipmentDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [notes, setNotes] = useState("");

  const { materialList, supplierList } = useSelector((state) => {
    return {
      materialList: state.selectMaterialReducer.materialList,
      supplierList: state.selectSupplierReducer.supplierList,
    };
  });

  const handleRegister = (e) => {
    dispatch(
      registerMaterialInTransit(
        order,
        orderDate,
        supplier,
        material,
        amount,
        transactionType,
        shipmentDate,
        arrivalDate,
        releaseDate,
        notes
      )
    );
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div>
      <div>
        <h6>
          To monitor the import process of a product, fill out the following
          form.
        </h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="order">
            Order Number *
          </span>
          <input
            autoFocus
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
          <span className="input-group-text" id="orderDate">
            Order Date *
          </span>
          <input
            id="orderDate"
            type="date"
            className="form-control"
            aria-label="orderDate"
            aria-describedby="basic-addon1"
            onChange={(e) => setOrderDate(e.target.value)}
            value={orderDate}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="supplier">
            Supplier *
          </span>
          <select
            className="form-select"
            id="supplier"
            aria-label="Example select with button addon"
            onChange={(e) => setSupplier(e.target.value)}
            value={supplier}
          >
            <option value=""> Choose a supplier</option>
            {!!supplierList &&
              supplierList.length > 0 &&
              supplierList.map((supplier) => (
                <option value={supplier._id}>{supplier.name}</option>
              ))}
          </select>
        </div>
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
          <span className="input-group-text" id="transactionType">
            Transaction Type *
          </span>
          <select
            className="form-select"
            id="transactionType"
            aria-label="Example select with button addon"
            onChange={(e) => setTransactionType(e.target.value)}
            value={transactionType}
          >
            <option value=""> Choose an option</option>
            <option>100% anticipated</option>
            <option>50% anticipated - 50% cash against documents</option>
            <option>30% anticipated - 70% cash against documents</option>
            <option>20% anticipated - 80% cash against documents</option>
            <option>100% on credit at 90 days from the B/L date</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="shipmentDate">
            Shipment Date
          </span>
          <input
            id="shipmentDate"
            min={orderDate}
            type="date"
            className="form-control"
            aria-label="shipmentDate"
            aria-describedby="basic-addon1"
            onChange={(e) => setShipmentDate(e.target.value)}
            value={shipmentDate}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="arrivalDate">
            Arrival Date
          </span>
          <input
            id="arrivalDate"
            min={shipmentDate}
            type="date"
            className="form-control"
            aria-label="arrivalDate"
            aria-describedby="basic-addon1"
            onChange={(e) => setArrivalDate(e.target.value)}
            value={arrivalDate}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="releaseDate">
            Release Date
          </span>
          <input
            id="releaseDate"
            type="date"
            min={arrivalDate}
            className="form-control"
            aria-label="releaseDate"
            aria-describedby="basic-addon1"
            onChange={(e) => setReleaseDate(e.target.value)}
            value={releaseDate}
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
            onClick={handleRegister}
          >
            Register Order
          </button>
        </div>
        <hr />
        <h6>
          To delete an order, select it in the table and then click the button
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
