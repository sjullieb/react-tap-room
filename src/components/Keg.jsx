import React from 'react';

function Keg(props){
  var styleGrid = {
    display: 'grid',
    gridTemplateColumns: '50% 50%'
  };
  return(
  <div>
    <div style={styleGrid}>
      <h1>{props.name} | {props.brand}</h1>
      <p>{props.style} | {props.alcohol}</p>
      <p>{props.price}</p>
    </div>
    <div>
      <button>Edit</button>
    </div>
  </div>
  );
}

export default Keg;
