import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../styles/ActionsBar.css"

function ActionBar() {
  const history = useHistory();

  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <nav className="list-group list-group-flush">
      <div className="list-group-img-container">
        <img className="list-group-img" src={logo} alt="logo" />
      </div>
      <Link to="/MainView" className="list-group-item">
        Home
      </Link>
      <Link to="/ReportsView" className="list-group-item">
        Reports
      </Link>
      <Link to="/MaterialsView" className="list-group-item">
        Materials
      </Link>
      <Link to="/CustomersView" className="list-group-item">
        Customers
      </Link>
      <Link to="/SuppliersView" className="list-group-item">
        Suppliers
      </Link>
      <Link to="/UsersView" className="list-group-item">
        Users
      </Link>
      <Link to="/" onClick={Logout} className="list-group-item">
        Log out
      </Link>
    </nav>
  );
}

export default ActionBar;
