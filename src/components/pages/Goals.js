import React, { Component } from 'react';
import Contact from '../../components/contacts/Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';



class Goals extends Component {

  componentDidMount() {
    this.props.getContacts();
  }
  
  render() {
    const { contacts } = this.props;
    const blue = "#0f2862";
    const red = "#9e363a";
    const greyBlue = "#4f5f76";
    const purple = "#091f36";

    const title = {color: "#9e363a"};


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

Goals.propTypes = {
  contacts: PropTypes.array.isRequied,
  getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContacts })(Goals);