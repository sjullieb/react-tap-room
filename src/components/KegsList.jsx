import React from 'react';
import Keg from './Keg';

const beerStyles = ["Lager", "IPA", "Pilsner", "Gose", "Wheat", "Pale-Ale", "Sour"]

var styleGrid = {
  display: 'grid',
  gridTemplateColumns: '50% 50%'
};
var styleTapNumber={
  color: 'red'
};

function KegsList(){
  return(
    <div>
      <h4 style={styleTapNumber}>{masterKegsList.length} taps, rotating daily.</h4>
      <h2>ON DRAFT</h2>
      <div style={styleGrid}>
        {masterKegsList.map((keg, index) =>
          <Keg
            index={index + 1}
            keg ={keg}
            key={keg.id}
           />
        )}
      </div>
    </div>
  );
}

export default KegsList;
