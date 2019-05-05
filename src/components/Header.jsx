import React from  'react';
import Navbar from "./Navbar";
import logo from '../assets/images/logo.svg';

function Header() {
  var headerStyle={
    display: "inline-block",
    color: "black",
  };

  var styleLogo={
    width: "30px",
    float: "left",
    padding: "20px 20px 0 20px"
  };

  return(
    <div className="main">
      <style jsx>
        {`
          .main{
          text-align: center;
          background-color: lightyellow;
          height:82px;
          width: 100%;
          background-image: none;
          background-repeat: repeat;
          background-attachment: scroll;
          background-position: 0% 0%;
          position: fixed;
          top: 0pt;
          left: 0pt;
          padding: 50
        }
        .border-line{
          border-bottom: 2px solid red;
        `}
      </style>
      <div className='border-line'>
        <img style={styleLogo} src={logo} alt='logo'></img>
        <h1 style={headerStyle}>TAPROOM</h1>
        <Navbar/>
      </div>
    </div>
  );
}

export default Header;
