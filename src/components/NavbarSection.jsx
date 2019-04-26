import React from "react";
import { Link } from "react-router-dom";

function NavbarSection(props){
  var navbarStyle={
    display: "inline-block",
    padding: "20px"
  };

  return(
    // <button style={{navbarStyle}}>{props.name}</button>
    // <button style={{navbarStyle}}>
    //   <Link to={props.link}><button style={{navbarStyle}}>{props.name}</Link>
    // </button>
    <Link to={props.link}><button style={navbarStyle}>{props.name}</button></Link>
  );
}

export default NavbarSection;
