import React from 'react';
import Keg from './Keg';

// const beerStyles = ["Lager", "IPA", "Pilsner", "Gose", "Wheat", "Pale-Ale", "Sour"];

var styleGrid = {
  display: 'grid',
  gridTemplateColumns: '50% 50%'
};
var styleTapNumber={
  color: 'red'
};

function KegsList(props){
  return(
    <div>
      <h4 style={styleTapNumber}>{Object.keys(props.kegsList).length} taps, rotating daily.</h4>
      <h2>ON DRAFT</h2>
      <div style={styleGrid}>
        {Object.keys(props.kegsList).map(function(kegId) {
          var keg=props.kegsList[kegId];
          console.log(keg);
          return(
          <Keg
            index={Object.keys(props.kegsList).indexOf(kegId) + 1}
            keg ={keg}
            kegId={kegId}
            key={kegId}
            onPintSubtraction={props.onPintSubtraction}
           />);}
        )}
      </div>
    </div>
  );
}

export default KegsList;
