import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {Layout} from "./components"
import { Login, Register, UniversityList, University, NotFound} from "./pages"

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UniversityList}/>
        <Route path="/university/:id" component={University}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default routes