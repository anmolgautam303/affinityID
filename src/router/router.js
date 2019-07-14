//@flow
import React from "react";
import { Route } from "react-router-dom";
import EmployeeList from "../containers/employeeList";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={EmployeeList} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
