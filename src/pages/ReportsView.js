import ReportsManager from "../components/reports/ReportsManager";
//import ReportTable from "../components/reports/ReportTable";
import ActionBar from "../components/general/ActionBar";
import logo from "../assets/images/logo.png";

import "../styles/ReportsView.css";

function ReportsView() {
  return (
    <div className="ReportsView">
      <div className="ReportsView-blockLogoNav">
        <div className="ReportsView-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ActionBar />
        </div>
      </div>
      <div className="ReportsView-InfoBlock">
        <br />
        <h2>Reports Manager</h2>
        <hr />
        <div className="ReportsView-Reportsmanagerblock">
          <ReportsManager />
        </div>
        <hr />
        {/* <ReportTable /> */}
      </div>
    </div>
  );
}

export default ReportsView;
