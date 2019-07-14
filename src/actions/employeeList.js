import {
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  ADD_EMPLOYEE
} from '../constants/employeeDatabase_constants';
  
export const deleteEmployee = payload => {
  return {
    type: DELETE_EMPLOYEE,
    payload: payload
  }
};

export const updateEmployee = payload => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: payload
  }
};

export const addEmployee = payload => {
  return {
    type: ADD_EMPLOYEE,
    payload: payload
  }
};
