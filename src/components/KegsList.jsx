import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

// const beerStyles = ["Lager", "IPA", "Pilsner", "Gose", "Wheat", "Pale-Ale", "Sour"];

var styleGrid = {
  display: 'grid',
  gridTemplateColumns: '50% 50%'
};
var styleTapNumber={
  color: 'red'
};
var mainStyle={
  backgroundColor: 'lightyellow',
  padding: '20px'
};

function KegsList(props){
  return(
    <div style={mainStyle}>
      <h4 style={styleTapNumber}>{Object.keys(props.kegsList).length} taps, rotating daily.</h4>
      <h2>ON DRAFT</h2>
      <div style={styleGrid}>
        {Object.keys(props.kegsList).map(function(kegId) {
          var keg=props.kegsList[kegId];
          return(
            <Keg
              index={Object.keys(props.kegsList).indexOf(kegId) + 1}
              keg ={keg}
              kegId={kegId}
              key={kegId}
              onPintSubtraction={props.onPintSubtraction}
              onKegDeletion={props.onKegDeletion}
            />);}
        )}
      </div>
    </div>
  );
}

KegsList.propTypes={
  kegsList: PropTypes.object,
  onPintSubtraction: PropTypes.func,
  onKegDeletion: PropTypes.func
};

export default KegsList;
