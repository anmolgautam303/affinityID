import { produce } from 'immer';
import {
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE
} from '../constants/employeeDatabase_constants';

const initialState = {
  employeeList: [
    { key: 1, firstName: "Jack", lastName: "Jackson",email: "jack@affinityid.co.nz", role: "Admin", team: "Creative", image: "jack.png", address: "307 Brant road", city: "Auckland", dateAdded: "14-07-2019 10:59:14" },
    { key: 2, firstName: "Victoria", lastName: "Ferguson", email: "victoria@affinityid.co.nz", role: "Admin", team: "Management", image: "victoria.png", address: "308 Brant road", city: "Auckland", dateAdded: "13-07-2019 11:09:14" },
    { key: 3, firstName: "Donna", lastName: "Hicks", email: "donna@affinityid.co.nz", role: "Admin", team: "Finance & Admin", image: "donna.png", address: "309 Brant road", city: "Auckland", dateAdded: "12-07-2019 11:11:14" },
    { key: 4, firstName: "Mary", lastName: "Long", email: "mary@affinityid.co.nz", role: "Employee", team: "Finance & Admin", image: "mary.png", address: "310 Brant road", city: "Auckland", dateAdded: "11-07-2019 09:25:14" },
    { key: 5, firstName: "Andy", lastName: "Mann", email: "andy@affinityid.co.nz", role: "Employee", team: "Creative", image: "andy.png", address: "311 Brant road", city: "Auckland", dateAdded: "10-07-2019 10:59:14" }
  ]
};

const EmployeeDatabaseReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_EMPLOYEE:
      console.log("ADD_EMPLOYEE", action.payload);
      return {
        ...state,
        employeeList: [ ...state.employeeList, { ...action.payload, key: state.employeeList.length + 1 } ]
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employeeList: state.employeeList.filter((employee) => employee.key !== action.payload)
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employeeList: produce(state.employeeList, draft => {
          draft[action.payload.key - 1] = action.payload;
        })
      };
    default:
      return state;
  }
};

export default EmployeeDatabaseReducer;
