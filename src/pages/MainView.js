import logo from "../assets/images/logo.png";
import ActionBar from "../components/general/ActionBar";

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

      <div className="MainView-InfoBlock">*********** **************</div>
    </div>
  );
}

export default MainView;
