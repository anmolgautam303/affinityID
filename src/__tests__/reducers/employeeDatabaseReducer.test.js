import EmployeeDatabaseReducer from '../../reducers/employeeDatabaseReducer';
import {
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE
} from '../../constants/employeeDatabase_constants';

describe('EmployeeDatabaseReducer', () => {
  const employeeObject = { key: 1, firstName: "Anmol", lastName: "Jackson",email: "jack@affinityid.co.nz", role: "Admin", team: "Creative", image: "jack.png", address: "307 Brant road", city: "Auckland", dateAdded: "14-07-2019 10:59:14" };

  it('adds new employee to redux store', () => {
    let emptyState = {
      employeeList: [
      ]
    };

    emptyState = EmployeeDatabaseReducer(emptyState,{ type:ADD_EMPLOYEE, payload: employeeObject });
    expect(emptyState.employeeList).toEqual([employeeObject] )
  });

  it('deletes an employee to redux store', () => {
    let state = {
      employeeList: [
        { key: 1, firstName: "Jack", lastName: "Jackson",email: "jack@affinityid.co.nz", role: "Admin", team: "Creative", image: "jack.png", address: "307 Brant road", city: "Auckland", dateAdded: "14-07-2019 10:59:14" }
      ]
    };

    state = EmployeeDatabaseReducer(state, { type: DELETE_EMPLOYEE, payload: employeeObject.key });
    expect(state).not.toContain(employeeObject);
  });

  it('updates employee details in redux store', () => {
    let state = {
      employeeList: [
        { key: 1, firstName: "Jack", lastName: "Jackson",email: "jack@affinityid.co.nz", role: "Admin", team: "Creative", image: "jack.png", address: "307 Brant road", city: "Auckland", dateAdded: "14-07-2019 10:59:14" }
      ]
    };

    state = EmployeeDatabaseReducer(state,{ type: UPDATE_EMPLOYEE, payload: employeeObject });
    expect(state.employeeList).toEqual([employeeObject] )
  });
});
