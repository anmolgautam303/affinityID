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

class Employees extends React.Component {
  state = {
    selectedEmployeeData: null,
    actionName: 'addEmployee',
    searchKeyword: '',
    sortBy: 'newest'
  };

  componentDidMount() {
    const { employeeList } = this.props;
    const value = queryString.parse(this.props.location.search);
    const id = value.id;
    console.log('value', id);

    if (id && employeeList[id - 1]) {
      console.log("1");
      this.userCardSelected(employeeList[id - 1], 'openSelectedEmployeeCard')
    }
  }

  userCardSelected = (selectedEmployeeData = null, actionName = 'addEmployee') => {
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
            selectedEmployeeData={selectedEmployeeData}
            userCardSelected={this.userCardSelected}
            deleteEmployee={deleteEmployee}
          />
        );
      case 'updateEmployeeData':
        return (
          <CardForm
            selectedEmployeeData={selectedEmployeeData}
            userCardSelected={this.userCardSelected}
            updateEmployee={updateEmployee}
          />
        );
      default:
        return (
          <CardForm
            actionName={actionName}
            addEmployee={addEmployee}
          />
        );
    }
  };

  filterAndSort = (role, searchName = null) => {
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

  filterEmployeeList = (role, searchName) => {
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
