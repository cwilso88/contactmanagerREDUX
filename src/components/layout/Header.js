import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from "./logo.png";

const Header = props => {
  const { branding } = props;
  const blue = "#0f2862";
  const red = "#9e363a";
  const greyBlue = "#4f5f76";
  const purple = "#091f36";
  const imageStyle = {width: "80px", height: "80px"};
  const backgroundStyle = {backgroundColor: "#0f2862", padding: "20px 0px"};
  const menuLinksStyle = {};


  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3" style={backgroundStyle}>
      <div className="container">
      <div className="logo-image">
        <img src={logo} alt="logo" style={imageStyle}/>
      </div>
        <a href="/" className="navbar-brand" style={{ textTransform: "uppercase", backgroundColor: "#091f36", padding: "10px", borderRadius: "10px" }}>
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={menuLinksStyle}>
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link" style={menuLinksStyle}>
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={menuLinksStyle}>
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
