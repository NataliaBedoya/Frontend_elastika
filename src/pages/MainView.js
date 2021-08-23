import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "../assets/images/logo.png";
import ActionBar from "../components/general/ActionBar";
import AvailableProduct from "../components/availableProduct/AvailableProductTable";
import UpdateManager from "../components/updateProduct/UpdateManager";
import CommittedProductManager from "../components/committedProduct/CommitedProductManager";
import ProductInTransitManager from "../components/productInTransit/ProductInTransitManager";
import { getAllMaterials } from "../store/selectMaterialReducer";
import { getAllSupplier } from "../store/selectSupplierReducer";
import { getAllCustomer } from "../store/selectCustomerReducer";
import { getStock, getCommit, getTransit } from "../store/selectReportReducer";

import "../styles/MainView.css";

function MainView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMaterials());
    dispatch(getAllCustomer());
    dispatch(getAllSupplier());
    dispatch(getStock());
    dispatch(getCommit());
    dispatch(getTransit());
  }, []);

  return (
    <div className="MainView">
      <div className="MainView-blockLogoNav">
        <div className="MainView-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ActionBar />
        </div>
      </div>

      <div className="MainView-InfoBlock">
        <nav>
          <ul className="nav nav-tabs nav-fill" id="nav-tab">
            <li className="nav-item">
              <button
                className="nav-link active"
                id="available-tab"
                href="#available"
                data-bs-toggle="tab"
                data-bs-target="#available"
                type="button"
                role="tab"
                aria-controls="available"
                aria-selected="true"
              >
                Available Product
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                id="update-tab"
                href="#update"
                data-bs-toggle="tab"
                data-bs-target="#update"
                type="button"
                role="tab"
                aria-controls="update"
                aria-selected="false"
              >
                Update Stock
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                id="commit-tab"
                href="#commit"
                data-bs-toggle="tab"
                data-bs-target="#commit"
                type="button"
                role="tab"
                aria-controls="commit"
                aria-selected="false"
              >
                Committed product
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link"
                id="transit-tab"
                href="#transit"
                data-bs-toggle="tab"
                data-bs-target="#transit"
                type="button"
                role="tab"
                aria-controls="transit"
                aria-selected="false"
              >
                Product in transit
              </button>
            </li>
          </ul>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="available"
            role="tabpanel"
            aria-labelledby="available-tab"
          >
            <br />
            <h2>Stock</h2>
            <hr />
            <h6>
              Quantity of product available to date {new Date().toDateString()}.
            </h6>
            <AvailableProduct />
          </div>
          <div
            className="tab-pane fade"
            id="update"
            role="tabpanel"
            aria-labelledby="update-tab"
          >
            <br />
            <h2>Update Stock</h2>
            <hr />
            <UpdateManager />
          </div>
          <div
            className="tab-pane fade"
            id="commit"
            role="tabpanel"
            aria-labelledby="commit-tab"
          >
            <br />
            <h2>Commit product</h2>
            <hr />
            <CommittedProductManager />
          </div>

          <div
            className="tab-pane fade"
            id="transit"
            role="tabpanel"
            aria-labelledby="transit-tab"
          >
            <br />
            <h2>Product in transit</h2>
            <hr />
            <ProductInTransitManager />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
