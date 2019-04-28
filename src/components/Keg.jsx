import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  var styleGrid = {
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    magrin: '20px',
    border: '3px red',
    borderStyle: 'none none dotted none'
  };
  return(
  <div style={styleGrid}>
    <div >
      <h4>{props.index}. {props.name} | {props.brand}</h4>
      <p>{props.type} | {props.alcohol}</p>
      <p>{props.price}</p>
    </div>
    <div>
      <button>Edit</button>
      <button>-1 pint</button>
    </div>
  </div>
  );
}

Keg.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcohol: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default Keg;
