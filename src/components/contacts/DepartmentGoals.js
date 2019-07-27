import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

class DepartmentGoals extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteContact(id);

  };

  render() {
    const { id, name, goal, goaltwo, departmentLead, image } = this.props.contact;
    const { showContactInfo } = this.state;

    const listItemStyle = {backgroundColor: "#f9f9f9", borderColor: "#C0C0C0"};
    const listTitleStyle = {color: "#0f2862", fontWeight: "bold", paddingLeft: "5px"};

    return (
      <div className="card card-body mb-3" style={{ backgroundColor: "#4f5f76"}}>
        <div className="ui grid" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            style={{ cursor: 'pointer' }}
          />
          <i
            className="ui icon trash alternate outline"
            style={{ cursor: 'pointer', float: 'right', color: '#B22222', paddingLeft: "15px" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="ui icon pencil alternate"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: '#DCDCDC',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        </div>
        </div> 
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-envelope"></i> <span style={listTitleStyle}>Top Priority:</span> {goal}</li>
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-phone"></i> <span style={listTitleStyle}>Secondary Goal</span>: {goaltwo}</li>
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-sitemap"></i> <span style={listTitleStyle}>Department Lead</span>: {departmentLead.name}</li>
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-map-marker-alt"></i> <span style={listTitleStyle}>Department Lead Email</span>: {departmentLead.email}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

DepartmentGoals.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired

};

export default connect(null, { deleteContact })(DepartmentGoals);