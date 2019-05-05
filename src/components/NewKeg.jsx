import React from 'react';
import PropType from 'prop-types';

function NewKeg(props){
  let _name = null;
  let _brand = null;
  let _type = null;
  let _alcohol = null;
  let _pintLeft = null;
  let _price = null;

  function handleNewKegSubmission(event){
    event.preventDefault();
    props.onNewKegCreation(makeNewKegObject());
    clearVarValues();
  }

  function handleEditKegSubmission(event){
    event.preventDefault();
    props.onKegUpdate(props.kegId, makeNewKegObject());
    clearVarValues();
  }

  function makeNewKegObject(){
    console.log({name: _name.value, brand: _brand.value, type: _type.value, alcohol: _alcohol.value, pintLeft: _pintLeft.value, price: _price.value});
    return {name: _name.value, brand: _brand.value, type: _type.value, alcohol: _alcohol.value, pintLeft: _pintLeft.value, price: _price.value};
  }

  function clearVarValues(){
    _name = '';
    _brand = '';
    _type = '';
    _alcohol = '';
    _pintLeft = '';
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

  let content = '';
  if (typeof props.kegId === 'undefined'){
    content =
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
            id='alcohol' type='number' max="100" min="0" step="0.1" required></input><br/>
          <input style={styleInput}
            ref={(input) => {_pintLeft=input;}}
            id='pintLeft' type='hidden' defaultValue="124" required></input>
          <label>Price </label>
          <input style={styleInput}
            ref={(input) => {_price=input;}}
            id='price' type='number' step="0.01" min="0" precision="2" required></input><br/>
          <button type='submit' style={styleButton}>Add</button>
        </form>
      </div>
    ;
  } else {
    content =
      <div style={mainStyle}>
        <form onSubmit={handleEditKegSubmission}>
          <label>Name </label>
          <input style={styleInput}
            ref={(input) => {_name = input;}}
            id='name' type='text' defaultValue={props.keg.name} required></input><br/>
          <label>Brand </label>
          <input style={styleInput}
            ref={(input) => {_brand = input;}}
            id='brand' type='text' defaultValue={props.keg.brand} required></input><br/>
          <label>Type </label>
          <input style={styleInput}
            ref={(input) => {_type = input;}}
            id='type' type='text' defaultValue={props.keg.type} required></input><br/>
          <label>Alcohol content </label>
          <input style={styleInput}
            ref={(input) => {_alcohol=input;}}
            id='alcohol' type='number' max="100" min="0" step="0.1" defaultValue={props.keg.alcohol} required></input><br/>
          <label>Pint left </label>
          <input style={styleInput}
            ref={(input) => {_pintLeft=input;}}
            id='pintLeft' type='number' max="124" min="0" defaultValue={props.keg.pintLeft} required></input><br/>
          <label>Price </label>
          <input style={styleInput}
            ref={(input) => {_price=input;}}
            id='price' type='number' step="0.01" min="0" precision="2" defaultValue={props.keg.price} required></input><br/>
          <button type='submit' style={styleButton}>Save</button>
          <button type='button' style={styleButton} onClick={props.onCancel}>Cancel</button>
        </form>
      </div>
    ;
  }
  return(content);
}

NewKeg.propTypes={
  onNewKegCreation: PropType.func,
  onKegUpdate:PropType.func,
  onCancel:PropType.func,
  keg: PropType.object,
  kegId: PropType.string
};

export default NewKeg;
