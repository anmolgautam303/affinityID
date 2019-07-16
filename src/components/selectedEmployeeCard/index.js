import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './selectedEmployeeCard.scss';

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
          <div className="selected__user__card-edit-buttons">
            <p className="selected__user__card-confirmation-text">Are you sure?</p>
            <p
              className="selected__user__card-button-text"
              onClick={this.removeEmployeeFromList}
            >
              YES
            </p>
            <p className="selected__user__card-button-text" onClick={this.iconClicked}>NO</p>
          </div>
        );
      default:
        return (
          <>
            <div className="selected__user__card-icon-container selected__user__card-custom-icon-margin"
              onClick={() => userCardSelected(selectedEmployeeData, 'updateEmployeeData')}
            >
              <i className="fa fa-pencil" />
            </div>
            <div className="selected__user__card-icon-container" onClick={() => this.iconClicked('remove')}>
              <i className="fa fa-times selected__user__card-icon-times" />
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
          className="selected__user__card"
        >
          <Card.Img
              variant="top"
              src={require(`../../assets/img/${selectedEmployeeData.image}`)}
              className="selected__user__card-image"
          />
          <Row className="selected__user__card-row">
            <Col>
              <p className="selected__user__card-text selected__user__card-text-name">{selectedEmployeeData.firstName} {selectedEmployeeData.lastName}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="selected__user__card-text selected__user__card-text-email">{selectedEmployeeData.email}</p>
            </Col>
          </Row>

          <Row className="selected__user__card-action-container">
            <Col>
              {this.renderIcons()}
            </Col>
          </Row>

          <Row className="selected__user__card-divider">
            <Col xs={6}>
              <p className="selected__user__card-additional-text selected__user__card-additional-text-info">Role</p>
              <p className="selected__user__card-additional-text selected__user__card-additional-text-desc">{selectedEmployeeData.role}</p>
            </Col>

            <Col xs={6}>
              <p className="selected__user__card-additional-text selected__user__card-additional-text-info">Team</p>
              <p className="selected__user__card-additional-text selected__user__card-additional-text-desc">{selectedEmployeeData.team}</p>
            </Col>
          </Row>

          <Row className="selected__user__card-divider">
            <Col xs={6}>
              <p className="selected__user__card-additional-text selected__user__card-additional-text-info">Address</p>
              <p className="selected__user__card-additional-text selected__user__card-additional-text-desc">{selectedEmployeeData.address}</p>
            </Col>

            <Col xs={6}>
              <p className="selected__user__card-additional-text selected__user__card-additional-text-info">City</p>
              <p className="selected__user__card-additional-text selected__user__card-additional-text-desc">{selectedEmployeeData.city}</p>
            </Col>
          </Row>

          <CopyToClipboard
            text={`http://localhost:3000?id=${selectedEmployeeData.key}`}
          >
            <button
              type="button"
              className="btn btn-dark selected__user__card-share-button"
            >
              SHARE
            </button>
          </CopyToClipboard>

        </Card>
      );
    }

    return null;
  }
};

export default SelectedEmployeeCard;
