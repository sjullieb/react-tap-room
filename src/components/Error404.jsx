import React from 'react';
import { Link } from 'react-router-dom';

function Error404(){
  return(
  <div>
    <h1>Unfortunately we can't find the requested page :(</h1>
    <Link to='/'><p>Go to Home page</p></Link>
  </div>
  );
}

export default Error404;
