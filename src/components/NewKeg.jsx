import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class NewKeg extends Component {
  constructor(props){
    super(props);
    this.state = { toDashboard : false};
    this._name = null;
    this._brand = null;
    this._type = null;
    this._alcohol = null;
    this._pintLeft = null;
    this._price = null;

    this.handleNewKegSubmission = this.handleNewKegSubmission.bind(this);
    this.handleEditKegSubmission = this.handleEditKegSubmission.bind(this);
  }

  handleNewKegSubmission(event){
    event.preventDefault();
    this.props.onNewKegCreation(this.makeNewKegObject());
    this.clearVarValues();
    this.setState({toDashboard: true});
  }

  handleEditKegSubmission(event){
    event.preventDefault();
    this.props.onKegUpdate(this.props.kegId, this.makeNewKegObject());
    this.clearVarValues();
  }

  makeNewKegObject(){
    return {name: this._name.value, brand: this._brand.value, type: this._type.value, alcohol: this._alcohol.value, pintLeft: this._pintLeft.value, price: this._price.value};
  }

  clearVarValues(){
    this._name = '';
    this._brand = '';
    this._type = '';
    this._alcohol = '';
    this._pintLeft = '';
    this._price = '';
  }

  render(){
    var mainStyle={
      backgroundColor: 'lightyellow',
      padding: '20px',
      color: 'black',
      fontSize: '14pt'
    };

    var styleInput={
      width: '100%',
      height: '24px',
      fontFamily: "'Trebuchet MS', Helvetica, sans-serif",
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
    if (this.state.toDashboard === true) {
      content = <Redirect to='/admin' />;
    } else if (typeof this.props.kegId === 'undefined'){
      content =
        <div style={mainStyle}>
          <form onSubmit={this.handleNewKegSubmission}>
            <label>Name </label>
            <input style={styleInput}
              ref={(input) => {this._name = input;}}
              id='name' type='text' required></input><br/>
            <label>Brand </label>
            <input style={styleInput}
              ref={(input) => {this._brand = input;}}
              id='brand' type='text' required></input><br/>
            <label>Type </label>
            <input style={styleInput}
              ref={(input) => {this._type = input;}}
              id='type' type='text' required></input><br/>
            <label>Alcohol content </label>
            <input style={styleInput}
              ref={(input) => {this._alcohol=input;}}
              id='alcohol' type='number' max="100" min="0" step="0.1" required></input><br/>
            <input style={styleInput}
              ref={(input) => {this._pintLeft=input;}}
              id='pintLeft' type='hidden' defaultValue="124" required></input>
            <label>Price </label>
            <input style={styleInput}
              ref={(input) => {this._price=input;}}
              id='price' type='number' step="0.01" min="0" required></input><br/>
            <button type='submit' style={styleButton}>Add</button>
          </form>
        </div>
      ;
    } else {
      content =
        <div style={mainStyle}>
          <form onSubmit={this.handleEditKegSubmission}>
            <label>Name </label>
            <input style={styleInput}
              ref={(input) => {this._name = input;}}
              id='name' type='text' defaultValue={this.props.keg.name} required></input><br/>
            <label>Brand </label>
            <input style={styleInput}
              ref={(input) => {this._brand = input;}}
              id='brand' type='text' defaultValue={this.props.keg.brand} required></input><br/>
            <label>Type </label>
            <input style={styleInput}
              ref={(input) => {this._type = input;}}
              id='type' type='text' defaultValue={this.props.keg.type} required></input><br/>
            <label>Alcohol content </label>
            <input style={styleInput}
              ref={(input) => {this._alcohol=input;}}
              id='alcohol' type='number' max="100" min="0" step="0.1" defaultValue={this.props.keg.alcohol} required></input><br/>
            <label>Pint left </label>
            <input style={styleInput}
              ref={(input) => {this._pintLeft=input;}}
              id='pintLeft' type='number' max="124" min="0" defaultValue={this.props.keg.pintLeft} required></input><br/>
            <label>Price </label>
            <input style={styleInput}
              ref={(input) => {this._price=input;}}
              id='price' type='number' step="0.01" min="0" defaultValue={this.props.keg.price} required></input><br/>
            <button type='submit' style={styleButton}>Save</button>
            <button type='button' style={styleButton} onClick={this.props.onCancel}>Cancel</button>
          </form>
        </div>
      ;
    }
    return(content);
  }
}

NewKeg.propTypes={
  onNewKegCreation: PropTypes.func,
  onKegUpdate:PropTypes.func,
  onCancel:PropTypes.func,
  keg: PropTypes.object,
  kegId: PropTypes.string
};

export default NewKeg;
