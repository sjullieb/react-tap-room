import React from  'react';
import Navbar from "./Navbar";

function Header() {
  var headerStyle={
    display: "inline-block",
    color: "blue",
  }
  return(
    <div>
      <h1 style={headerStyle}>Tap Room</h1>
      <Navbar/>
    </div>
  );
}

export default Header;
