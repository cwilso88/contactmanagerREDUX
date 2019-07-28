import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    department: '',
    status: '',
    location: '',
    image: '',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, department, status, location, image } = this.state;

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

    if (image === '') {
      this.setState({ image: 'https://mytek.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg' });
      return;
    }

    const newContact = {
      name,
      email,
      phone, 
      department, 
      status,
      location,
      image
    };

    // ADD NEW CONTACT
    this.props.addContact(newContact);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      department: '',
      status: '',
      location: '',
      image: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, department, location, status, image, errors } = this.state;
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
              <TextInputGroup
                label="Department"
                name="department"
                placeholder="Enter Department"
                value={department}
                onChange={this.onChange}
                error={errors.phone}
              />
              <TextInputGroup
                label="Status"
                name="status"
                placeholder="Online, Away, or Offline"
                value={status}
                onChange={this.onChange}
                error={errors.phone}
              />
              <TextInputGroup
                label="Location"
                name="location"
                placeholder="Remote or Office"
                value={location}
                onChange={this.onChange}
                error={errors.phone}
              />
              <TextInputGroup
                label="Image"
                name="image"
                placeholder="Professional Profile Picture URL"
                value={image}
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
