import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { tokenValidation } from "./store/services/userServices";

import HomeView from "./pages/HomeView";
import MainView from "./pages/MainView";
import ReportsView from "./pages/ReportsView";
import MaterialsView from "./pages/MaterialsView";
import CustomersView from "./pages/CustomersView";
import SuppliersView from "./pages/SuppliersView";
import UsersView from "./pages/UsersView";
import NotFound from "./pages/NotFound";
import ActionBar from "./components/general/ActionBar";
import { useDispatch } from "react-redux";
import { updateUserRole } from "./store/selectUserReducer";

function PrivateRoute(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        await tokenValidation(token);
        const role = jwt_decode(token).role;
        dispatch(updateUserRole(role));
        const validRole = props.roles.includes(role);
        if(!token || !validRole) history.push("/");
      } catch(err) {
        history.push("/");
      }
    };
    fetchData();
  }, [props])

  return (
    <Route {...props}></Route>
  )
}

function App() {
  return (
    <Router>
      <ActionBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <PrivateRoute exact roles={['admin', 'internal', 'external']} path="/MainView" component={MainView} />
        <PrivateRoute exact roles={['admin', 'internal', 'external']} path="/ReportsView" component={ReportsView} />
        <PrivateRoute exact roles={['admin', 'internal', 'external']} path="/MaterialsView" component={MaterialsView} />
        <PrivateRoute exact roles={['admin', 'internal']} path="/CustomersView" component={CustomersView} />
        <PrivateRoute exact roles={['admin', 'external']} path="/SuppliersView" component={SuppliersView} />
        <PrivateRoute exact roles={['admin']} path="/UsersView" component={UsersView} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
