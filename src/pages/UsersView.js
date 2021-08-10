import logo from "../assets/images/logo.png";
import ActionBar from "../components/general/ActionBar";
import UsersManager from "../components/users/UsersManager";
import UsersList from "../components/users/UsersList";

import "../styles/UsersView.css";

function UsersView() {
  return (
    <div className="UsersView">
      <div className="UsersView-blockLogoNav">
        <div className="UsersView-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ActionBar />
        </div>
      </div>
      <div className="UsersView-InfoBlock">
        <br />
        <h2>Users Manager</h2>
        <hr />
        <div className="UsersView-usermanagerblock">
          <UsersManager />
        </div>
        <br />
        <hr />
        <UsersList />
      </div>
    </div>
  );
}

export default UsersView;
