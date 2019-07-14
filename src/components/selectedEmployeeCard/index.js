import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './selectedEmployeeCard.css';

class SelectedEmployeeCard extends React.Component {
  state = {
    editOrRemoveClicked: null
  };

  iconClicked = (val = null) => {
    this.setState({
      editOrRemoveClicked: val
    })
  };

  removeEmployeeFromList = () => {
    const { userCardSelected, selectedEmployeeData, deleteEmployee } = this.props;

    deleteEmployee(selectedEmployeeData.key);
    userCardSelected(selectedEmployeeData, 'addEmployee');
  };

  renderIcons() {
    const { editOrRemoveClicked } = this.state;
    const { userCardSelected, selectedEmployeeData } = this.props;

    switch (editOrRemoveClicked) {
      case 'edit' :
        return null;
      case 'remove' :
        return (
          <div className="selected-user-card-edit-buttons">
            <p className="selected-user-card-confirmation-text">Are you sure?</p>
            <p
              className="selected-user-card-button-text"
              onClick={this.removeEmployeeFromList}
            >
              YES
            </p>
            <p className="selected-user-card-button-text" onClick={this.iconClicked}>NO</p>
          </div>
        );
      default:
        return (
          <>
            <div className="icon-container custom-icon-margin"
              onClick={() => userCardSelected(selectedEmployeeData, 'updateEmployeeData')}
            >
              <i className="fa fa-pencil" />
            </div>
            <div className="icon-container" onClick={() => this.iconClicked('remove')}>
              <i className="fa fa-times selected-user-card-icon-times" />
            </div>
          </>
        );
    }
  }

  render () {
    const { selectedEmployeeData } = this.props;

    if (selectedEmployeeData) {
      return (
        <Card
          className="selected-user-card"
        >
          <Card.Img
              variant="top"
              src={require(`../../assets/img/${selectedEmployeeData.image}`)}
              className="selected-user-card-image"
          />
          <Row className="selected-user-card-row">
            <Col>
              <p className="selected-user-card-text selected-user-card-text-name">{selectedEmployeeData.firstName} {selectedEmployeeData.lastName}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="selected-user-card-text selected-user-card-text-email">{selectedEmployeeData.email}</p>
            </Col>
          </Row>

          <Row className="selected-user-card-action-container">
            <Col>
              {this.renderIcons()}
            </Col>
          </Row>

          <Row className="selected-user-card-divider">
            <Col xs={6}>
              <p className="selected-user-card-additional-text selected-user-card-additional-text-info">Role</p>
              <p className="selected-user-card-additional-text selected-user-card-additional-text-desc">{selectedEmployeeData.role}</p>
            </Col>

            <Col xs={6}>
              <p className="selected-user-card-additional-text selected-user-card-additional-text-info">Team</p>
              <p className="selected-user-card-additional-text selected-user-card-additional-text-desc">{selectedEmployeeData.team}</p>
            </Col>
          </Row>

          <Row className="selected-user-card-divider">
            <Col xs={6}>
              <p className="selected-user-card-additional-text selected-user-card-additional-text-info">Address</p>
              <p className="selected-user-card-additional-text selected-user-card-additional-text-desc">{selectedEmployeeData.address}</p>
            </Col>

            <Col xs={6}>
              <p className="selected-user-card-additional-text selected-user-card-additional-text-info">City</p>
              <p className="selected-user-card-additional-text selected-user-card-additional-text-desc">{selectedEmployeeData.city}</p>
            </Col>
          </Row>

          <button
              type="button"
              className="btn btn-dark selected-user-card-share-button"
              // onClick={() => props.getRandomfact()}
          >
            SHARE
          </button>
        </Card>
      );
    }

    return null;
  }
};

export default SelectedEmployeeCard;
