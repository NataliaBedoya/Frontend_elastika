import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import logo from "../assets/images/logo.png";
import ActionBar from "../components/general/ActionBar";
import CustomersManager from "../components/customers/CustomersManager";
import CustomersList from "../components/customers/CustomerList";
import { getAllCustomer } from "../store/selectCustomerReducer";

import "../styles/CustomersView.css";

function CustomersView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomer());
  }, []);

  return (
    <div className="CustomersView">
      <div className="CustomersView-blockLogoNav">
        <div className="CustomersView-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ActionBar />
        </div>
      </div>
      <div className="CustomersView-InfoBlock">
        <br />
        <h2>Customers Manager</h2>
        <hr />
        <div className="Customers-customermanagerblock">
          <CustomersManager />
        </div>
        <br />
        <hr />
        <CustomersList />
      </div>
    </div>
  );
}

export default CustomersView;
