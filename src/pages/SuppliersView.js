import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SuppliersManager from "../components/suppliers/SuppliersManager";
import SuppliersList from "../components/suppliers/SuppliersList";
import { getAllSupplier } from "../store/selectSupplierReducer";
import SupplierInformationUpdate from "../components/suppliers/SupplierInformationUpdate";

import "../styles/SupplierView.css";

function SuppliersView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSupplier());
  }, []);

  return (
    <div className="SuppliersView">
      <div className="SuppliersView-header">
        <h2>Suppliers Manager</h2>
        <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#uploadSupplier"
          >
            Create Supplier
          </button>
      </div>
      <SuppliersManager />
      <SupplierInformationUpdate />
      <SuppliersList />
    </div>
  );
}

export default SuppliersView;
