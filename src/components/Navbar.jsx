import React from  'react';
import NavbarSection from "./NavbarSection";

function Navbar(){
  return(
    <div style={{float: "left"}}>
      <NavbarSection link="/" name="Beers"/>
      <NavbarSection link="/newkeg" name="New Keg"/>
      <NavbarSection link="/about" name="About"/>
    </div>
  );
}

export default Navbar;
