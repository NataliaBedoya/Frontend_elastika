import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function ActionBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const Logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  // const handleClicAdmins = () => {
  //   dispatch(getAllAdmin());
  // };

  // const handleClicCoaches = () => {
  //   dispatch(getAllCoach());
  // };

  // const handleClicUsers = () => {
  //   dispatch(getAllUser());
  // };

  // const handleClicNews = () => {
  //   dispatch(getAllNews());
  // };

  return (
    <div>
      <ul className="list-group list-group-flush">
        <Link to="/MainView" className="list-group-item">
          {" "}
          Profile{" "}
        </Link>
        <Link to="/ReportsView" className="list-group-item">
          {" "}
          Reports{" "}
        </Link>
        <Link to="/MaterialsView" className="list-group-item">
          {" "}
          Materials{" "}
        </Link>
        <Link to="/SuppliersView" className="list-group-item">
          {" "}
          Suppliers{" "}
        </Link>
        <Link to="/UsersView" className="list-group-item">
          {" "}
          Users{" "}
        </Link>
        <Link onClick={Logout} className="list-group-item">
          {" "}
          Log out{" "}
        </Link>
      </ul>
    </div>
  );
}

export default ActionBar;
