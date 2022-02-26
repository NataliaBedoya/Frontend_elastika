import ReportsManager from "../components/reports/ReportsManager";
import "../styles/ReportsView.css";

function ReportsView() {
  return (
    <div className="ReportsView">
      <div className="ReportsView-InfoBlock">
        <br />
        <h2>Reports Manager</h2>
        <hr />
        <div className="ReportsView-Reportsmanagerblock">
          <ReportsManager />
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ReportsView;
