import React, { Component } from "react";
import Header from "./Header";
import NewKeg from "./NewKeg";
import Error404 from "./Error404";
// import ProduceTable from "./ProduceTable";
// import ScheduleTable from "./ScheduleTable";
import KegsList from './KegsList';
import { Switch, Route } from 'react-router-dom';
import headerImg from '../assets/images/header2.jpg';
import { v4 } from 'uuid';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      masterKegList: {
        [v4()]: {
          name: "Sour Storm",
          brand: "Oakshire",
          type: "Sour",
          alcohol: 6.1,
          price: 5,
          pintLeft: 124
        },
        [v4()]: {
          name: "American Lager",
          brand: "10 Barrell",
          type: "Lager",
          alcohol: 4.3,
          price: 4,
          pintLeft: 124
        },
        [v4()]: {
          name: "Outta Line",
          brand: "Rouge",
          type: "IRA",
          alcohol: 7.2,
          price: 6,
          pintLeft: 124
        },
        [v4()]: {
          name: "Sour Storm",
          brand: "Oakshire",
          type: "Sour",
          alcohol: 6.1,
          price: 5,
          pintLeft: 124
        },
        [v4()]: {
          name: "American Lager",
          brand: "10 Barrell",
          type: "Lager",
          alcohol: 4.3,
          price: 4,
          pintLeft: 124
        },
        [v4()]: {
          name: "Outta Line",
          brand: "Rouge",
          type: "IRA",
          alcohol: 7.2,
          price: 6,
          pintLeft: 124
        },
        [v4()]: {
          name: "Sour Storm",
          brand: "Oakshire",
          type: "Sour",
          alcohol: 6.1,
          price: 5,
          pintLeft: 124
        },
        [v4()]: {
          name: "American Lager",
          brand: "10 Barrell",
          type: "Lager",
          alcohol: 4.3,
          price: 4,
          pintLeft: 124
        }
        // ,
        // v4(): {
        //   name: "Outta Line",
        //   brand: "Rouge",
        //   type: "IRA",
        //   alcohol: 7.2,
        //   price: 6,
        //   pintLeft: 124
        // },
        // v4(): {
        //   name: "Sour Storm",
        //   brand: "Oakshire",
        //   type: "Sour",
        //   alcohol: 6.1,
        //   price: 5
        // },
        // v4(): {
        //   name: "American Lager",
        //   brand: "10 Barrell",
        //   type: "Lager",
        //   alcohol: 4.3,
        //   price: 4,
        //   pintLeft: 124
        // },
        // v4(): {
        //   name: "Outta Line",
        //   brand: "Rouge",
        //   type: "IRA",
        //   alcohol: 7.2,
        //   price: 6
        // },
        // v4(): {
        //   name: "Sour Storm",
        //   brand: "Oakshire",
        //   type: "Sour",
        //   alcohol: 6.1,
        //   price: 5,
        //   pintLeft: 124
        // },
        // v4(): {
        //   name: "American Lager",
        //   brand: "10 Barrell",
        //   type: "Lager",
        //   alcohol: 4.3,
        //   price: 4,
        //   pintLeft: 124
        // },
        // v4(): {
        //   name: "Outta Line",
        //   brand: "Rouge",
        //   type: "IRA",
        //   alcohol: 7.2,
        //   price: 6,
        //   pintLeft: 124
        // },
        // v4(): {
        //   name: "Sour Storm",
        //   brand: "Oakshire",
        //   type: "Sour",
        //   alcohol: 6.1,
        //   price: 5,
        //   pintLeft: 124
        // },
        // v4(): {
        //   name: "American Lager",
        //   brand: "10 Barrell",
        //   type: "Lager",
        //   alcohol: 4.3,
        //   price: 4,
        //   pintLeft: 124,
        //   id: v4()
        // },
        // v4(): {
        //   name: "Outta Line",
        //   brand: "Rouge",
        //   type: "IRA",
        //   alcohol: 7.2,
        //   price: 6,
        //   pintLeft: 124
        // },
        // v4(): {
        //   name: "Sour Storm",
        //   brand: "Oakshire",
        //   type: "Sour",
        //   alcohol: 6.1,
        //   price: 5,
        //   pintLeft: 124
        // },
        // v4(): {
        //   name: "American Lager",
        //   brand: "10 Barrell",
        //   type: "Lager",
        //   alcohol: 4.3,
        //   price: 4,
        //   pintLeft: 124
        // },
        // v4(): {
        //   name: "Outta Line",
        //   brand: "Rouge",
        //   type: "IRA",
        //   alcohol: 7.2,
        //   price: 6,
        //   pintLeft: 124
        // }
      }
    };
    this.handleNewKegCreation = this.handleNewKegCreation.bind(this);
    this.handlePintSubtraction = this.handlePintSubtraction.bind(this);
    this.handleUpdateKeg = this.handleUpdateKeg.bind(this);
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
  }

  handlePintSubtraction(kegId){
    var newKegList = Object.assign({}, this.state.masterKegList);
    newKegList[kegId].pintLeft--;
    this.setState({masterKegList : newKegList});
  }

  handleNewKegCreation(newKeg){
    var newKegId = v4();
    newKeg.pintLeft = 124;
    var newKegList = Object.assign({}, this.state.masterKegList, {[newKegId]: newKeg});
    this.setState({masterKegList : newKegList});
  }

  handleUpdateKeg(kegId, newKeg){
    var newKegList = Object.assign({}, this.state.masterKegList);
    newKegList[kegId] = newKeg;
    this.setState({masterKegList : newKegList});
  }

  handleDeleteKeg(kegId){
    var newKegList = Object.assign({}, this.state.masterKegList);
    delete newKegList[kegId];
    this.setState({masterKegList : newKegList});
  }

  render(){
    var styleHeaderMargin={
      marginTop: '110px',
      color: 'black',
      backgroundColor: 'lightyellow',
      fontFamily: "'Trebuchet MS', Helvetica, sans-serif",
      width: '100%',
      backgroundImage: 'none',
      backgroundRepeat: 'repeat',
    };

    var imgStyle={
      width: '100%',
      padding: '0',
      margin: '0'
    };

    var borderLineStyle={
      border: '2px solid red !important',
      color: 'red !important',
      height: '3px !important'
    };

    return (
      <div style={styleHeaderMargin}>
        <Header/>
        <img src={headerImg} style={imgStyle}></img>
        <Switch>

          <Route exact path='/' render = {() => <KegsList
            kegsList={this.state.masterKegList}
            onPintSubtraction={this.handlePintSubtraction}
            onKegDeletion={this.handleDeleteKeg}
            onKegUpdate={this.handleUpdateKeg}
          />} />
          <Route path='/admin' render = {(props) => <KegsList
            kegsList={this.state.masterKegList}
            onPintSubtraction={this.handlePintSubtraction}
            onKegDeletion={this.handleDeleteKeg}
            onKegUpdate={this.handleUpdateKeg}
            currentRouterPath={props.location.pathname}
          />} />
          <Route path='/newkeg' render = {() => <NewKeg onNewKegCreation={this.handleNewKegCreation} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
