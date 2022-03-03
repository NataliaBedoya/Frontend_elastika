import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../styles/ActionsBar.css";

const menuOptions = {
  default: [
    { id: 2, name: 'Reports', to: 'ReportsView' },
  ],
  admin: [
    { id: 1, name: 'Home', to: 'MainView' },
    { id: 2, name: 'Reports', to: 'ReportsView' },
    { id: 3, name: 'Materials', to: 'MaterialsView' },
    { id: 4, name: 'Customers', to: 'CustomersView' },
    { id: 5, name: 'Suppliers', to: 'SuppliersView' },
    { id: 6, name: 'Users', to: 'UsersView' }
  ],
  internal: [
    { id: 1, name: 'Home', to: 'MainView' },
    { id: 2, name: 'Reports', to: 'ReportsView' },
    { id: 3, name: 'Materials', to: 'MaterialsView' },
    { id: 4, name: 'Customers', to: 'CustomersView' }
  ],
  external: [
    { id: 1, name: 'Home', to: 'MainView' },
    { id: 2, name: 'Reports', to: 'ReportsView' },
    { id: 3, name: 'Materials', to: 'MaterialsView' },
    { id: 5, name: 'Suppliers', to: 'SuppliersView' }
  ]
}

function ActionBar() {
  const history = useHistory();
  const location = useLocation();
  const role = useSelector(state => state.selectUserReducer.userRole);

  const [show, setShow] = useState(true);

  useEffect(() => {
    if(location.pathname === '/') setShow(false);
    else setShow(true);
  }, [location])

  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return show ? (
    <nav className="list-group list-group-flush">
      <div className="list-group-img-container">
        <img className="list-group-img" src={logo} alt="logo" />
      </div>
      {menuOptions[role].map(option => (
        <Link to={option.to} className="list-group-item" key={option.id}>
          {option.name}
        </Link>
      ))}
      <Link to="/" onClick={Logout} className="list-group-item">
        Log out
      </Link>
    </nav>
  ) : <></>;
}

export default ActionBar;
