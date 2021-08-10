import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import HomeView from "./pages/HomeView";
import MainView from "./pages/MainView";
import ReportsView from "./pages/ReportsView";
import MaterialsView from "./pages/MaterialsView";
import SuppliersView from "./pages/SuppliersView";
import UsersView from "./pages/UsersView";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/MainView" component={MainView} />
        <Route exact path="/ReportsView" component={ReportsView} />
        <Route exact path="/MaterialsView" component={MaterialsView} />
        <Route exact path="/SuppliersView" component={SuppliersView} />
        <Route exact path="/UsersView" component={UsersView} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
