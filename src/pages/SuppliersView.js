import logo from "../assets/images/logo.png";
import ActionBar from "../components/general/ActionBar";
import SuppliersManager from "../components/suppliers/SuppliersManager";
import SuppliersList from "../components/suppliers/SuppliersList";

import "../styles/SupplierView.css";

function SuppliersView() {
  return (
    <div className="SuppliersView">
      <div className="SuppliersView-blockLosoNav">
        <div className="SuppliersView-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ActionBar />
        </div>
      </div>
      <div className="SuppliersView-InfoBlock">
        <br />
        <h2>Suppliers Manager</h2>
        <hr />
        <div className="SuppliersView-usermanagerblock">
          <SuppliersManager />
        </div>
        <br />
        <hr />
        <SuppliersList />
      </div>
    </div>
  );
}

export default SuppliersView;
