
import {
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE
  } from '../../constants/employeeDatabase_constants';
import * as actions from '../../actions/employeeList';

it('creates an action to delete an Employee', () => {
  const employeeObject = { key: 5, firstName: "Andy", lastName: "Mann", email: "andy@affinityid.co.nz", role: "Employee", team: "Creative", image: "andy.png", address: "311 Brant road", city: "Auckland", dateAdded: "10-07-2019 10:59:14" };

  const expectedAction = { type: DELETE_EMPLOYEE, payload: employeeObject };

  expect(actions.deleteEmployee(employeeObject)).toEqual(expectedAction);
});

it('creates an action to update an Employee', () => {
  const employeeObject = { key: 5, firstName: "Andy", lastName: "Mann", email: "andy@affinityid.co.nz", role: "Employee", team: "Creative", image: "andy.png", address: "311 Brant road", city: "Auckland", dateAdded: "10-07-2019 10:59:14" };

  const expectedAction = { type: UPDATE_EMPLOYEE, payload: employeeObject };

  expect(actions.updateEmployee(employeeObject)).toEqual(expectedAction);
});


it('creates an action to add an Employee', () => {
  const employeeObject = { key: 5, firstName: "Andy", lastName: "Mann", email: "andy@affinityid.co.nz", role: "Employee", team: "Creative", image: "andy.png", address: "311 Brant road", city: "Auckland", dateAdded: "10-07-2019 10:59:14" };

  const expectedAction = { type: ADD_EMPLOYEE, payload: employeeObject };

  expect(actions.addEmployee(employeeObject)).toEqual(expectedAction);
});
