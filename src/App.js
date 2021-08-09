import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import HomeView from "./pages/HomeView";
import MainView from "./pages/MainView";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/MainView" component={MainView} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
