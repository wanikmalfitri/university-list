import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./components";
import { Login, Signup, UniversityList, NotFound } from "./pages";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Layout page="login">
            <Login />
          </Layout>
        </Route>
        <Route exact path="/signup">
          <Layout page="signup">
            <Signup />
          </Layout>
        </Route>
        <Route exact path="/">
          <Layout>
            <UniversityList />
          </Layout>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default routes;
