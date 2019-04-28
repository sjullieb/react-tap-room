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
    color: 'grey'
  };

  return(
    // <button style={{navbarStyle}}>{props.name}</button>
    // <button style={{navbarStyle}}>
    //   <Link to={props.link}><button style={{navbarStyle}}>{props.name}</Link>
    // </button>
    <p style={navbarStyle}><Link to={props.link} style={linkDecoration}>{props.name}</Link></p>
  );
}

NavbarSection.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default NavbarSection;
