import React from 'react';
import PropTypes from 'prop-types';
import NewKeg from './NewKeg';

class Keg extends React.Component{

  constructor(props){
    super(props);
    this.state = {showEdit: false};
    this.handleKegEdit = this.handleKegEdit.bind(this);
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
  }

  handleEditButtonClick(){
    this.setState({showEdit: true});
  }

  handleKegEdit(kegId, updatedKeg){
    this.props.onKegUpdate(kegId, updatedKeg);
    this.setState({showEdit: false});
  }

  handleCancelEdit(){
    this.setState({showEdit: false});
  }

  render(){
    const { keg } = this.props;
    let showForm = '';
    if (this.state.showEdit){
      //showForm = <NewKeg onKegUpdate={this.props.onKegUpdate} keg={keg} kegId={this.props.kegId}/>;
      showForm = <NewKeg onKegUpdate={this.handleKegEdit}  onCancel={this.handleCancelEdit} keg={keg} kegId={this.props.kegId}/>;
    }

    var styleGrid = {
      display: 'grid',
      gridTemplateColumns: '60% 40%',
      magrin: '20px',
      border: '3px red',
      borderStyle: 'none none dotted none'
    };
    var styleBeerName={
      textWeight: 'bold'
    };
    var styleButton={
      color: 'grey',
      width: '80px',
      padding: '5px',
      fontSize: '11pt',
      border: '2px solid grey',
      borderRadius: '10px',
      margin: '5px',
    };

    let buttonsContent = '';
    if(this.props.currentRouterPath === '/admin'){
      buttonsContent = <p>Pint left: {keg.pintLeft}<br/>
        <button style={styleButton} onClick={() => {this.props.onPintSubtraction(this.props.kegId);}}>-1 pint</button><br/>
        <button style={styleButton} onClick={() => {this.props.onKegDeletion(this.props.kegId);}}>Delete</button><br/>
        <button style={styleButton} onClick={this.handleEditButtonClick}>Edit</button>
      </p>;
    }
    return(
      <div style={styleGrid}>
        <div >
          <h3 style={styleBeerName}>{this.props.index}. {keg.name} | {keg.brand}</h3>
          <p>{keg.type} | {keg.alcohol}% abv<br/>
          ${keg.price}</p>

        </div>
        <div>
          {buttonsContent}
        </div>
        {showForm}
      </div>
    );
  }
}

Keg.propTypes = {
  index: PropTypes.number.isRequired,
  keg: PropTypes.object,
  kegId: PropTypes.string,
  onPintSubtraction: PropTypes.func,
  onKegDeletion: PropTypes.func,
  onKegUpdate: PropTypes.func,
  currentRouterPath: PropTypes.string,
};

export default Keg;
