import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import { mainRoutes } from "assets/index";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
