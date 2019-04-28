import React from  'react';
import NavbarSection from "./NavbarSection";

function Navbar(){
  return(
    <div style={{float: "right"}}>
      <NavbarSection link="/" name="Beers"/>
      <NavbarSection link="/NewKeg" name="New Keg"/>
      <NavbarSection link="/about" name="About"/>
    </div>
  );
}

export default Navbar;
