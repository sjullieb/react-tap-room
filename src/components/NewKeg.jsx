import React from 'react';

function NewKeg(props){
  return(
  <div>
    <form>
      <label for='name'>Name</label>
      <input id='name' type='text'>
      </input>
      <button>Add</button>
    </form>
  </div>
  );
}

export default NewKeg;
