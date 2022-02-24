import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CustomersManager from "../components/customers/CustomersManager";
import CustomersList from "../components/customers/CustomerList";
import CustomerInformationUpdate from "../components/customers/CustomerInformationUpdate";
import DeleteAdditionalContact from "../components/customers/DeleteAdditionalContact";
import { getAllCustomer } from "../store/selectCustomerReducer";

import "../styles/CustomersView.css";

function CustomersView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomer());
  }, []);

  return (
      <div className="CustomersView">
        <div className="customers-view-header">
          <h2>Customers Manager</h2>
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#uploadCostumer"
          >
            Create Customer
          </button>
        </div>
        <CustomersManager />
        <CustomerInformationUpdate />
        <DeleteAdditionalContact />
        <CustomersList />
      </div>
  );
}

export default CustomersView;
