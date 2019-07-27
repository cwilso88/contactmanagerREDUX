import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DepartmentGoals extends Component {
  state = {
    showContactInfo: false
  };


  render() {
    const { id, name, goal, goaltwo, departmentLead } = this.props.contact;
    const { showContactInfo } = this.state;

    const listItemStyle = {backgroundColor: "#f9f9f9", borderColor: "#C0C0C0"};
    const listTitleStyle = {color: "#0f2862", fontWeight: "bold", paddingLeft: "5px"};

    return (
      <div className="card card-body mb-3" style={{ backgroundColor: "#4f5f76"}}>
        <div className="ui grid" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        
        <div className="twelve wide column">
        <h4 style={{ color: "#f9f9f9", letterSpacing: "3px" }}>
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
        </h4>
        </div>
        </div> 
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-bullseye"></i> <span style={listTitleStyle}>Top Priority:</span> {goal}</li>
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-bullseye"></i> <span style={listTitleStyle}>Secondary Goal</span>: {goaltwo}</li>
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-sitemap"></i> <span style={listTitleStyle}>Department Lead</span>: {departmentLead.name}</li>
            <li className="list-group-item" style={listItemStyle}> <i className="fas fa-envelope"></i> <span style={listTitleStyle}>Department Lead Email</span>: {departmentLead.email}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

DepartmentGoals.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default connect(null, { })(DepartmentGoals);