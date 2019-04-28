import React from  'react';
import Navbar from "./Navbar";

function Header() {
  var headerStyle={
    display: "inline-block",
    color: "blue",
  }
  return(
    <div className="main">
      <style jsx>
        {`
          .main{
          text-align: center;
          background-color: white;
          height:100px;
          width: 100%;
          background-image: none;
          background-repeat: repeat;
          background-attachment: scroll;
          background-position: 0% 0%;
          position: fixed;
          top: 0pt;
          left: 0pt;

          border-bottom: 4px solid white;

        }
        .border-line{
          margin-bottom: 2px;
          border-bottom: 2px solid red;
        `}
      </style>
      <div className='border-line'>
        <h1 style={headerStyle}>Tap Room</h1>
        <Navbar/>
      </div>
    </div>
  );
}

export default Header;
