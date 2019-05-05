import React from  'react';
import NavbarSection from "./NavbarSection";

function Navbar(){
  return(
    <div style={{float: "left"}}>
      <NavbarSection link="/" name="Beers"/>
      <NavbarSection link="/newkeg" name="New Keg"/>
      <NavbarSection link="/admin" name="Admin"/>
    </div>
  );
}

export default Navbar;
