import React from 'react';
import { Link } from 'react-router-dom';

function Error404(){
  var pageStyle={

  }
  var linkDecoration={
    textDecoration: 'none',
    color: 'black'
  };
  return(
  <div>
    <h1>Unfortunately we can't find the requested page :(</h1>
    <Link to='/' style={linkDecoration}><p>Go to Home page</p></Link>
  </div>
  );
}

export default Error404;
