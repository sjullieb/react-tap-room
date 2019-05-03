import React from 'react';
import PropType from 'prop-types';

function NewKeg(props){
  let _name = null;
  let _brand = null;
  let _type = null;
  let _alcohol = null;
  let _price = null;

  function handleNewKegSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, type: _type.value, alcohol: _alcohol.value, price: _price.value});
    _name = '';
    _brand = '';
    _type = '';
    _alcohol = '';
    _price = '';
  }

  var mainStyle={
    backgroundColor: 'lightyellow',
    padding: '20px',
    color: 'black',
    fontSize: '14pt'
  };

  var styleInput={
    width: '100%',
    height: '24px'
  };

  var styleButton={
    color: 'grey',
    width: '80px',
    padding: '5px',
    fontSize: '11pt',
    border: '2px solid',
    borderRadius: '10px',
    margin: '5px',
  };

  return(
    <div style={mainStyle}>
      <form onSubmit={handleNewKegSubmission}>
        <label>Name </label>
        <input style={styleInput}
          ref={(input) => {_name = input;}}
          id='name' type='text' required></input><br/>
        <label>Brand </label>
        <input style={styleInput}
          ref={(input) => {_brand = input;}}
          id='brand' type='text' required></input><br/>
        <label>Type </label>
        <input style={styleInput}
          ref={(input) => {_type = input;}}
          id='type' type='text' required></input><br/>
        <label>Alcohol content </label>
        <input style={styleInput}
          ref={(input) => {_alcohol=input;}}
          id='alcohol' type='number' max="100" min="0" required></input><br/>
        <label>Price </label>
        <input style={styleInput}
          ref={(input) => {_price=input;}}
          id='price' type='number' required></input><br/>

        <button type='submit' style={styleButton}>Add</button>
      </form>
    </div>
  );
}

NewKeg.propTypes={
  onNewKegCreation: PropType.func
};

export default NewKeg;
