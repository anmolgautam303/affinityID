import rootReducer from '../../reducers';
import EmployeeDatabaseReducer from "../../reducers/employeeDatabaseReducer";

describe('rootReducer', () => {

    it('initialises the default state', () => {
        expect(rootReducer({}, {})).toEqual({"EmployeeDatabaseReducer": {"employeeList":  [{"address": "307 Brant road", "city": "Auckland", "dateAdded": "14-07-2019 10:59:14", "email": "jack@affinityid.co.nz", "firstName": "Jack", "image": "jack.png", "key": 1, "lastName": "Jackson", "role": "Admin", "team": "Creative"}, {"address": "308 Brant road", "city": "Auckland", "dateAdded": "13-07-2019 11:09:14", "email": "victoria@affinityid.co.nz", "firstName": "Victoria", "image": "victoria.png", "key": 2, "lastName": "Ferguson", "role": "Admin", "team": "Management"}, {"address": "309 Brant road", "city": "Auckland", "dateAdded": "12-07-2019 11:11:14", "email": "donna@affinityid.co.nz", "firstName": "Donna", "image": "donna.png", "key": 3, "lastName": "Hicks", "role": "Admin", "team": "Finance & Admin"}, {"address": "310 Brant road", "city": "Auckland", "dateAdded": "11-07-2019 09:25:14", "email": "mary@affinityid.co.nz", "firstName": "Mary", "image": "mary.png", "key": 4, "lastName": "Long", "role": "Employee", "team": "Finance & Admin"}, {"address": "311 Brant road", "city": "Auckland", "dateAdded": "10-07-2019 10:59:14", "email": "andy@affinityid.co.nz", "firstName": "Andy", "image": "andy.png", "key": 5, "lastName": "Mann", "role": "Employee", "team": "Creative"}]}});
    });
});
