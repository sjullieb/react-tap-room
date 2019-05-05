import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props){

  var linkDecoration={
    textDecoration: 'none',
    color: 'black'
  };
  return(
    <div>
      <h1>Unfortunately we can't find the page {props.location.pathname}</h1>
      <Link to='/' style={linkDecoration}><p>Go to Home page</p></Link>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};
export default Error404;
