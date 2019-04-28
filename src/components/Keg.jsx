import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  var styleGrid = {
    display: 'grid',
    gridTemplateColumns: '60% 40%',
    magrin: '20px',
    border: '3px red',
    borderStyle: 'none none dotted none'
  };
  var styleBeerName={
    textWeight: 'bold'
  };
  var styleButton={
    color: 'grey',
    width: '80px',
    padding: '5px',
    fontSize: '11pt',
    border: '2px solid grey',
    borderRadius: '10px',
    margin: '5px',
  }
  return(
  <div style={styleGrid}>
    <div >
      <h3 style={styleBeerName}>{props.index}. {props.name} | {props.brand}</h3>
      <p>{props.type} | {props.alcohol}% abv<br/>
      ${props.price}</p>
    </div>
    <div>
      <p>Pint left: {props.pintLeft}<br/>
      <button style={styleButton}>-1 pint</button><br/>
      <button style={styleButton}>Edit</button></p>
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
  price: PropTypes.number.isRequired,
  pintLeft: PropTypes.number
};

export default Keg;
