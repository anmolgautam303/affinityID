// @flow
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import moment from "moment";
import queryString from 'query-string';
import UserCardList from '../../common/userCardList';
import SelectedEmployeeCard from '../selectedEmployeeCard';
import CardForm from '../cardForm';
import './employeeList.scss';

type Props = {
  employeeList: Object,
  location: Object,
  deleteEmployee: Function,
  updateEmployee: Function,
  addEmployee: Function
};

type State = {
  selectedEmployeeData: Object,
  actionName: string,
  searchKeyword: string,
  sortBy: string
};

class Employees extends React.Component<Props, State> {
  state = {
    selectedEmployeeData: null,
    actionName: 'addEmployee',
    searchKeyword: '',
    sortBy: 'newest'
  };

  componentDidMount() {
    console.log("this.props.locatio", typeof this.props.location);
    const { employeeList } = this.props;
    const value = queryString.parse(this.props.location.search);
    const id = value.id;
    console.log('value', id);

    if (id && employeeList[id - 1]) {
      console.log("1");
      this.userCardSelected(employeeList[id - 1], 'openSelectedEmployeeCard')
    }
  }

  userCardSelected = (selectedEmployeeData: Object = {}, actionName: string = 'addEmployee') => {
    this.setState({
      selectedEmployeeData,
      actionName
    })
  };

  renderCorrectCard = () => {
    const { selectedEmployeeData, actionName } = this.state;
    const { deleteEmployee, updateEmployee, addEmployee } = this.props;

    switch (actionName) {
      case 'openSelectedEmployeeCard':
        return (
          <SelectedEmployeeCard
            {...this.props}
            selectedEmployeeData={selectedEmployeeData}
            userCardSelected={this.userCardSelected}
            deleteEmployee={deleteEmployee}
            addEmployee={addEmployee}
          />
        );
      case 'updateEmployeeData':
        return (
          <CardForm
            actionName={actionName}
            selectedEmployeeData={selectedEmployeeData}
            userCardSelected={this.userCardSelected}
            updateEmployee={updateEmployee}
            addEmployee={addEmployee}
          />
        );
      default:
        return (
          <CardForm
            actionName={actionName}
            addEmployee={addEmployee}
            selectedEmployeeData={selectedEmployeeData}
            userCardSelected={this.userCardSelected}
            updateEmployee={updateEmployee}
          />
        );
    }
  };

  filterAndSort = (role: string, searchName: string = '') => {
    switch (this.state.sortBy) {
      case 'alphabetically':
        return this.filterEmployeeList(role, searchName).sort( function( a, b ) {
          return a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0;
        });
      case 'newest':
        return this.filterEmployeeList(role, searchName)
            .sort((a,b) =>
                new moment(a.dateAdded, 'DD-MM-YYYY HH:mm:ss')
                - new moment(b.dateAdded, 'DD-MM-YYYY HH:mm:ss'))
            .reverse();
      default:
        return this.filterEmployeeList(role, searchName);
    }
  };

  filterEmployeeList = (role: string, searchName: string) => {
    if (searchName) {
      return this.props.employeeList.filter(employee => {
        return employee.role === role
            && (employee.firstName.match(new RegExp(this.state.searchKeyword, 'i'))
            || employee.lastName.match(new RegExp(this.state.searchKeyword, 'i')));
      });
    }

    return this.props.employeeList.filter(employee => employee.role === role);
  };

  render () {
    const { searchKeyword, sortBy } = this.state;

    return (
      <div className="employees__container">
        <Container className="employees__container-custom-container">
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <img src={require("../../assets/img/affinityId-logo.svg")} alt="logo" className="employees__container-company-logo" />
            </Col>
            <Col xs={12} md={6}>
              <button
                type="button"
                className="btn btn-dark employees__container-custom-buttons"
                onClick={this.userCardSelected}
              >
                Create a new employee
              </button>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={6}>
              <Form>
                <FormControl
                  type="text"
                  placeholder="Search:"
                  className="employees__container-search-box"
                  onChange={(e) => this.setState({ searchKeyword: e.target.value })}
                />
              </Form>

              <Row className="employees__container-user-role-heading">
                <Col xs={4}>
                  <p className="employees__container-admin-text">Admin</p>
                </Col>
                <Col xs={8}>
                  <p className="employees__container-sort-by">Sort by:
                    <span
                      className="employees__container-sort-by-text"
                      onClick={() => this.setState({ sortBy: sortBy === 'newest' ? 'alphabetically' : 'newest' })}
                    >
                      {` ${sortBy === 'newest' ? 'newest' : 'alphabetically'}`}
                    </span>
                  </p>
                </Col>
              </Row>

              <UserCardList
                users={this.filterAndSort('Admin', searchKeyword)}
                userCardSelected={this.userCardSelected}
              />

              <Row className="employees__container-user-role-heading">
                <Col xs={6}>
                  <p className="employees__container-admin-text">Employee</p>
                </Col>
              </Row>

              <UserCardList
                users={this.filterAndSort('Employee', searchKeyword)}
                userCardSelected={this.userCardSelected}
              />
            </Col>

            <Col xs={12} md={6}>
              {this.renderCorrectCard()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Employees;
