import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function NavbarSection(props){
  var navbarStyle={
    display: "inline-block",
    padding: "20px"
  };
  
  var linkDecoration={
    textDecoration: 'none',
    color: 'black'
  };

  return(
    <p style={navbarStyle}><Link to={props.link} style={linkDecoration}>{props.name}</Link></p>
  );
}

NavbarSection.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default NavbarSection;
