import React from "react";
import { Route } from "react-router-dom";
import EmployeeList from "../screens/employeeList";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={EmployeeList} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
