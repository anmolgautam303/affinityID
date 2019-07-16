// @flow
import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import './cardForm.scss';

type Props = {
  selectedEmployeeData: Object,
  updateEmployee: Function,
  userCardSelected: Function,
  addEmployee: Function
};

type State ={
  image: string,
  name: string,
  email: string,
  role: string,
  team: string,
  address: string,
  city: string
}

class CardForm extends React.Component<Props, State> {
  state = {
    image: '',
    name: '',
    email: '',
    role: '',
    team: '',
    address: '',
    city: ''
  };

  componentDidMount() {
    const { selectedEmployeeData } = this.props;

    if (selectedEmployeeData) {
      this.setState({
        image: selectedEmployeeData.image,
        name: `${selectedEmployeeData.firstName} ${selectedEmployeeData.lastName}`,
        email: selectedEmployeeData.email,
        role: selectedEmployeeData.role,
        team: selectedEmployeeData.team,
        address: selectedEmployeeData.address,
        city: selectedEmployeeData.city
      });
    }
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();
    const {
      image,
      name,
      email,
      role,
      team,
      address,
      city
    } = this.state;
    const { selectedEmployeeData, updateEmployee, userCardSelected, addEmployee } = this.props;
    let [firstName, ...lastName] = name.split(" ");
    lastName = lastName.join(" ");

    if (selectedEmployeeData) {
      const updatedDate = {
        key: selectedEmployeeData.key,
        image,
        firstName,
        lastName,
        email,
        role,
        team,
        address,
        city
      };

      updateEmployee(updatedDate);
      userCardSelected(updatedDate, 'openSelectedEmployeeCard');
    } else {
      addEmployee({
        image,
        firstName,
        lastName,
        email,
        role,
        team,
        address,
        city,
        dateAdded: moment().format('DD-MM-YYYY HH:mm:ss')
      });
      this.setState({
        image: '',
        name: '',
        email: '',
        role: '',
        team: '',
        address: '',
        city: ''
      });
    }
  };

  isButtonDisabled = () => {
    const {
      image,
      name,
      email,
      role,
      team,
      address,
      city
    } = this.state;

    return image &&
    name &&
    email &&
    role &&
    team &&
    address &&
    city
  };

  render () {
    const {
      image,
      name,
      email,
      role,
      team,
      address,
      city
    } = this.state;
    const { selectedEmployeeData, userCardSelected } = this.props;

    const isButtonDisabled = !this.isButtonDisabled();

    return (
      <Card
        className='card__form'
      >
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId='formImage'>
            <Form.Label>Profile image</Form.Label>

            <Form.Control
              as='select'
              value={image? image : 'Please select a profile image'}
              onChange={(e) => this.setState({ image: e.target.value })}
            >
              <option disabled>Please select a profile image</option>
              <option>jack.png</option>
              <option>victoria.png</option>
              <option>donna.png</option>
              <option>mary.png</option>
              <option>andy.png</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='formName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId='formRole'>
            <Form.Label>Role</Form.Label>
            <Form.Control
              as='select'
              value={role ? role : 'Please select a role'}
              onChange={(e) => this.setState({ role: e.target.value })}
            >
              <option disabled>Please select a role</option>
              <option>Admin</option>
              <option>Employee</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='formTeam'>
            <Form.Label>Team</Form.Label>
            <Form.Control
              as='select'
              value={team ? team : 'Please select a team'}
              onChange={(e) => this.setState({ team: e.target.value })}
            >
              <option disabled>Please select a team</option>
              <option>Creative</option>
              <option>Management</option>
              <option>Finance & Admin</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='formAddress'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='address'
              placeholder='Enter address'
              value={address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId='formCity'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='city'
              placeholder='Enter city'
              value={city}
              onChange={(e) => this.setState({ city: e.target.value })}
            />
          </Form.Group>

          <button
            disabled={isButtonDisabled}
            variant='primary'
            type="submit"
            className='btn btn-dark card__form-button'
          >
            {selectedEmployeeData ? 'UPDATE EMPLOYEE' : 'ADD EMPLOYEE'}
          </button>
        </Form>

        {
          selectedEmployeeData
          && (
            <div
              className="card__form-icon-container"
              onClick={() => userCardSelected(selectedEmployeeData, 'openSelectedEmployeeCard')}
            >
              <i className="fa fa-times card__form-close" />
            </div>
          )
        }
      </Card>
    );
  }
}

export default CardForm;
