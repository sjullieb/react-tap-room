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
  };
  var keg = props.keg;
  return(
    <div style={styleGrid}>
      <div >
        <h3 style={styleBeerName}>{props.index}. {keg.name} | {keg.brand}</h3>
        <p>{keg.type} | {keg.alcohol}% abv<br/>
        ${keg.price}</p>
      </div>
      <div>
        <p>Pint left: {keg.pintLeft}<br/>
          <button style={styleButton} onClick={() => {props.onPintSubtraction(props.kegId);}}>-1 pint</button><br/>
          <button style={styleButton} onClick={() => {props.onKegDeletion(props.kegId);}}>Delete</button><br/>
          <button style={styleButton}>Edit</button>
        </p>
      </div>
    </div>
  );
}

Keg.propTypes = {
  index: PropTypes.number.isRequired,
  keg: PropTypes.object,
  kegId: PropTypes.string,
  onPintSubtraction: PropTypes.func
};

export default Keg;
