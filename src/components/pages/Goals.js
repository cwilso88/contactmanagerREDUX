import React, { Component } from 'react';
import DepartmentGoals from '../../components/contacts/DepartmentGoals';
import { connect } from 'react-redux';
import { getGoals } from '../../actions/contactActions';



class Goals extends Component {

  componentDidMount() {
    this.props.getGoals();
  }
  
  render() {
    const { contacts } = this.props;

    return (
      <div style={{ height: "100vh"}}>
        <h1 className="display-4 mb-2" style={{ color: "#4f5f76", marginTop: "60px" }}>
          <span style={{ color: "#0f2862" }}>Department</span> Goals
        </h1>
        <p className="mb-5">
           Track the department's top priority and secodary goals.
        </p>
        {contacts.map(contact => (
          <DepartmentGoals key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getGoals })(Goals);
