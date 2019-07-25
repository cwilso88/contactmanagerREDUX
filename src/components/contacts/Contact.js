import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteContact(id);

  };

  render() {
    const { id, name, email, phone, department, status, location } = this.props.contact;
    const { showContactInfo } = this.state;

    const listItemStyle = {backgroundColor: "#f9f9f9", borderColor: "#C0C0C0"};
    const listTitleStyle = {color: "#0f2862", fontWeight: "bold"};

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: '#9e363a' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item" style={listItemStyle}> <span style={listTitleStyle}>Email:</span> {email}</li>
            <li className="list-group-item" style={listItemStyle}> <span style={listTitleStyle}>Phone</span>: {phone}</li>
            <li className="list-group-item" style={listItemStyle}> <span style={listTitleStyle}>Department</span>: {department}</li>
            <li className="list-group-item" style={listItemStyle}> <span style={listTitleStyle}>Work Location</span>: {location}</li>
            <li className="list-group-item" style={listItemStyle}> <span style={listTitleStyle}>Current Status</span>: {status}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired

};

export default connect(null, { deleteContact })(Contact);
