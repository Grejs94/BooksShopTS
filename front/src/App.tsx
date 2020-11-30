import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";

import { mainRoutes } from "assets/routes";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg">
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
        </Container>
      </Router>
    </>
  );
}

export default App;
