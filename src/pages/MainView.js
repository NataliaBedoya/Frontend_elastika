import logo from "../assets/images/logo.png";
import ActionBar from "../components/general/ActionBar";
import AvailableProduct from "../components/availableProduct/AvailableProductTable";
import UpdateManager from "../components/updateProduct/UpdateManager";
import CommittedProductManager from "../components/committedProduct/CommitedProductManager";

import "../styles/MainView.css";

function MainView() {
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
          <ul class="nav nav-tabs" id="nav-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                // class="nav-link active"
                class="nav-link"
                id="available-tab"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="update-tab"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="commit-tab"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="transit-tab"
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
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="available-tab"
            role="tabpanel"
            aria-labelledby="available-tab"
          >
            <br />
            <h2>Stock</h2>
            <hr />
            <h6>
              Quantity of product available to date {new Date().toDateString()}
            </h6>
            <AvailableProduct />
          </div>
          <div
            class="tab-pane fade"
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
            class="tab-pane fade"
            id="commit"
            role="tabpanel"
            aria-labelledby="commit-tab"
          >
            <br />
            <h2>Commit product</h2>
            <hr />
            <CommittedProductManager />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
