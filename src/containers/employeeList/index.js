import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  deleteEmployee,
  updateEmployee,
  addEmployee
} from '../../actions/employeeList';
import EmployeeList from '../../components/employeeList';

class EmployeesContainer extends Component {
render() {
  return (
    <EmployeeList
      employeeList={this.props.employeeList}
      deleteEmployee={this.props.deleteEmployee}
      updateEmployee={this.props.updateEmployee}
      addEmployee={this.props.addEmployee}
    />
  );
  }
}

const mapStateToProps = state => {
  return {
    employeeList: state.EmployeeDatabaseReducer.employeeList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEmployee: (employeeKey) => { dispatch(deleteEmployee(employeeKey)) },
    updateEmployee: (updatedData) => { dispatch(updateEmployee(updatedData)) },
    addEmployee: (updatedData) => { dispatch(addEmployee(updatedData)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)
