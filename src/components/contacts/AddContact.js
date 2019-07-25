import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    // ADD NEW CONTACT
    this.props.addContact(newContact);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, department, location, status, errors } = this.state;
    const cardHeaderStyles = {backgroundColor: "#D3D3D3", color: "#0f2862", textTransform: "uppercase", letterSpacing:"2px", fontWeight: "bold", textAlign: "center", padding: "20px" };
    const formButtonStyles = {backgroundColor: "#0f2862", color: "#f9f9f9", letterSpacing: "2px"};
    return (
      <div style={{ height: "90vh"}}>
        <div className="card mb-3" style={{ marginTop: "70px" }}>
          <div className="card-header" style={cardHeaderStyles}>Add New Team Member</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                label="Name"
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChange}
                error={errors.name}
              />
              <TextInputGroup
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />
              <TextInputGroup
                label="Phone"
                name="phone"
                placeholder="Enter Phone"
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
              />
              <input
                type="submit"
                value="Add Member"
                className="btn btn-block"
                style={formButtonStyles}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddContact.protoTypes = {
  addContact: PropTypes.func.isRequired
}

export default connect(null, { addContact })(AddContact);
