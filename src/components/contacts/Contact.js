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
    const { id, name, email, phone, department, status, location, image } = this.props.contact;
    const { showContactInfo } = this.state;

    const listItemStyle = {backgroundColor: "#f9f9f9", borderColor: "#C0C0C0", paddingBottom: "25px", paddingTop: "25px", fontSize: "1.3em"};
    const listTitleStyle = {color: "#0f2862", fontWeight: "bold", paddingLeft: "5px"};

    return (
      <div className="card card-body mb-3" style={{ backgroundColor: "#4f5f76"}}>
        <div className="ui grid" style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "20px" }}>
        <div className="three wide column">
          <img className="ui small circular image" src={image} alt="profile" style={{ paddingBottom: "10px" }} />
        </div>
        
        <div className="twelve wide column">
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer', paddingLeft: "7px" }}
          />
          <i
            className="ui icon trash alternate outline"
            style={{ cursor: 'pointer', float: 'right', color: '#B22222', paddingLeft: "15px" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="ui icon edit outline"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'mediumseagreen',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        </div>
        </div> 
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-envelope" style={{ color: "limegreen" }}></i> <span style={listTitleStyle}>Email:</span> {email}</li>
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-phone" style={{ color: "blueviolet" }}></i> <span style={listTitleStyle}>Phone</span>: {phone}</li>
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-sitemap" style={{ color: "#192DBD" }}></i> <span style={listTitleStyle}>Department</span>: {department}</li>
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-map-marker-alt" style={{ color: "red" }}></i> <span style={listTitleStyle}>Work Location</span>: {location}</li>
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
