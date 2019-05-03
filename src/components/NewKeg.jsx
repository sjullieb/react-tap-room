import React from 'react';

function NewKeg(props){
  _name = null;
  _brand = null;
  _type = null;
  _alcohol = null;
  _price = null;

  onSubmit(){
    props.onCreateNewKeg({name: _name.value, brand: _brand.value, type: _type.value, alcohol: _alcohol.value, price: _price.value});
    _name = '';
    _brand = '';
    _type = '';
    _alcohol = '';
    _price = '';
  }

  return(
  <div>
    <form>
      <label>Name </label>
      <input
        ref=((input) => {_name = {input};})
        id='name' type='text' required></input><br/>
      <label>Brand </label>
      <input
        ref=((input) => {_brand = {input};})
        id='brand' type='text' required></input><br/>
      <label>Type </label>
      <input
        ref=((input) => {_type = {input};})
        id='type' type='text' required></input><br/>
      <label>Alcohol content </label>
      <input
        ref=((input) => {_alcohol={input};})
        id='alcohol' type='number' max="100" min="0" required></input><br/>
      <label>Price </label>
      <input
        ref=((input) => {_price={input};})
        id='price' type='number' required></input><br/>

      <button type='submit'>Add</button>
    </form>
  </div>
  );
}

export default NewKeg;
