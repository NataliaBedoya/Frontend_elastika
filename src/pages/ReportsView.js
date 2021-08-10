//import ReportsManager from "../components/reports/ReportsManager";
import ActionBar from "../components/general/ActionBar";
import logo from "../assets/images/logo.png";

function ReportsView() {
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
      <div className="ReportsView">
        <h3>Reports</h3>
        {/* <ReportsManager /> */}
      </div>
    </div>
  );
}

export default ReportsView;
