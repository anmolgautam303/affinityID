import React from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './userCardList.scss';

const UserCardList = (props) => {
  const { users, userCardSelected } = props;

  if (users.length === 0) {
    return <p>No employee exist in this category</p>
  }

  return (
    users.map((user) => (
      <Card
          key={user.key}
          className="employee-list-card"
          onClick={() => userCardSelected(user, 'openSelectedEmployeeCard')}
      >
        <Row>
          <Card.Img
              variant="top"
              src={require(`../../assets/img/${user.image}`)}
              className="employee-list-employee-icon"
          />
          <div className="employee-list-info">
            <p className="employee-list-card-card-text employee-list-card-text-name">{user.firstName} {user.lastName}</p>
            <p className="employee-list-card-card-text employee-list-card-text-role">{user.role}</p>
            <p className="employee-list-card-card-text employee-list-card-text-team">{user.team}</p>
          </div>
        </Row>
      </Card>
    ))
  );
};

export default UserCardList;
