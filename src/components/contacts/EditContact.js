import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContact } from '../../actions/contactActions';
import { updateContact } from '../../actions/contactActions';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  componentDidUpdate(props, state, snapshot) {
    if (this.props.contact !== props.contact) {
        this.setState(this.props.contact);
    }
}

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

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

    const { id } = this.props.match.params;
    
    const updContact = {
      id,
      name,
      email,
      phone
    };

    //// UPDATE CONTACT ////
    this.props.updateContact(updContact);

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
    const { name, email, phone, errors } = this.state;
    const cardHeaderStyles = {backgroundColor: "#D3D3D3", color: "#0f2862", textTransform: "uppercase", letterSpacing:"2px", fontWeight: "bold", textAlign: "center", padding: "20px" };
    const formButtonStyles = {backgroundColor: "#0f2862", color: "#f9f9f9", letterSpacing: "2px"};

    return (
      <div style={{ height: "90vh" }}>
        <div className="card mb-3" style={{ marginTop: "70px" }}>
          <div className="card-header" style={cardHeaderStyles}>Edit Contact</div>
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
                value="Update Contact"
                className="btn btn-light btn-block"
                style={formButtonStyles}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  contact: state.contact.contact
});
export default connect(mapStateToProps, { getContact, updateContact })(EditContact);
