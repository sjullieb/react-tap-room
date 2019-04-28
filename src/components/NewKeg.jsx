import React from 'react';

function NewKeg(props){
  return(
  <div>
    <form>
      <label>Name </label>
      <input id='name' type='text' required></input><br/>
      <label>Brand </label>
      <input id='brand' type='text' required></input><br/>
      <label>Type </label>
      <input id='type' type='text' required></input><br/>
      <label>Alcohol content </label>
      <input id='alcohol' type='number' max="100" min="0" required></input><br/>
      <label>Price </label>
      <input id='price' type='number' required></input><br/>
      
      <button>Add</button>
    </form>
  </div>
  );
}

export default NewKeg;
