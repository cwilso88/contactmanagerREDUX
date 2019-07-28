import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';



class Contacts extends Component {

  componentDidMount() {
    this.props.getContacts();
  }
  
  render() {
    const { contacts } = this.props;

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2" style={{ color: "#4f5f76", marginTop: "60px" }}>
          <span style={{ color: "#0f2862" }}>Team</span> Management
        </h1>
        <p className="mb-5">
          Manage the department team members and overall goals.
        </p>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContacts })(Contacts);
