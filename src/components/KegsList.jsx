import React from 'react';
import Keg from './Keg';

const beerStyles = ["Lager", "IPA", "Pilsner", "Gose", "Wheat", "Pale-Ale", "Sour"]

const masterKegsList = [
    {
      name: "Sour Storm",
      brand: "Oakshire",
      type: "Sour",
      alcohol: 6.1,
      price: 5
    },
    {
      name: "American Lager",
      brand: "10 Barrell",
      type: "Lager",
      alcohol: 4.3,
      price: 4
    },
    {
      name: "Outta Line",
      brand: "Rouge",
      type: "IRA",
      alcohol: 7.2,
      price: 6
    }
  ];

var styleGrid = {
  display: 'grid',
  gridTemplateColumns: "50% 50%"
};

function KegsList(){
  return(
    <div>
      <div style={styleGrid}>
        {masterKegsList.map((keg, index) =>
          <Keg
            name={keg.name}
            brand={keg.brand}
            style={keg.style}
            alcohol={keg.alcohol}
            price={keg.price}
            key={index}
           />
        )}
      </div>
    </div>
  );
}

export default KegsList;
