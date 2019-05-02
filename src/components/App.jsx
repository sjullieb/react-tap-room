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
      masterKegsList = [
          {
            name: "Sour Storm",
            brand: "Oakshire",
            type: "Sour",
            alcohol: 6.1,
            price: 5,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "American Lager",
            brand: "10 Barrell",
            type: "Lager",
            alcohol: 4.3,
            price: 4,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Outta Line",
            brand: "Rouge",
            type: "IRA",
            alcohol: 7.2,
            price: 6,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Sour Storm",
            brand: "Oakshire",
            type: "Sour",
            alcohol: 6.1,
            price: 5,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "American Lager",
            brand: "10 Barrell",
            type: "Lager",
            alcohol: 4.3,
            price: 4,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Outta Line",
            brand: "Rouge",
            type: "IRA",
            alcohol: 7.2,
            price: 6,
            pintLeft: 124,
            id: v4()
          },{
            name: "Sour Storm",
            brand: "Oakshire",
            type: "Sour",
            alcohol: 6.1,
            price: 5,
            pintLeft: 124
          },
          {
            name: "American Lager",
            brand: "10 Barrell",
            type: "Lager",
            alcohol: 4.3,
            price: 4,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Outta Line",
            brand: "Rouge",
            type: "IRA",
            alcohol: 7.2,
            price: 6,
            pintLeft: 124,
            id: v4()
          },{
            name: "Sour Storm",
            brand: "Oakshire",
            type: "Sour",
            alcohol: 6.1,
            price: 5,
            id: v4()
          },
          {
            name: "American Lager",
            brand: "10 Barrell",
            type: "Lager",
            alcohol: 4.3,
            price: 4,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Outta Line",
            brand: "Rouge",
            type: "IRA",
            alcohol: 7.2,
            price: 6,
            id: v4()
          },
          {
            name: "Sour Storm",
            brand: "Oakshire",
            type: "Sour",
            alcohol: 6.1,
            price: 5,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "American Lager",
            brand: "10 Barrell",
            type: "Lager",
            alcohol: 4.3,
            price: 4,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Outta Line",
            brand: "Rouge",
            type: "IRA",
            alcohol: 7.2,
            price: 6,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Sour Storm",
            brand: "Oakshire",
            type: "Sour",
            alcohol: 6.1,
            price: 5,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "American Lager",
            brand: "10 Barrell",
            type: "Lager",
            alcohol: 4.3,
            price: 4,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Outta Line",
            brand: "Rouge",
            type: "IRA",
            alcohol: 7.2,
            price: 6,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Sour Storm",
            brand: "Oakshire",
            type: "Sour",
            alcohol: 6.1,
            price: 5,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "American Lager",
            brand: "10 Barrell",
            type: "Lager",
            alcohol: 4.3,
            price: 4,
            pintLeft: 124,
            id: v4()
          },
          {
            name: "Outta Line",
            brand: "Rouge",
            type: "IRA",
            alcohol: 7.2,
            price: 6,
            pintLeft: 124,
            id: v4()
          }
        ];
      this.handleNewKegCreation = this.handleNewKegCreation.bind(this);
      this.handlePintSubtraction = this.handlePintSubtraction.bind(this);
      this.findKegIndex = this.findKegIndex.bind(this);
    }
  }

  render(){
    var styleHeaderMargin={
      marginTop: '110px',
      color: 'black',
      backgroundColor: 'white',
      fontFamily: "'Trebuchet MS', Helvetica, sans-serif",
      width: '100%',
      backgroundImage: 'none',
      backgroundRepeat: 'repeat',
    }
    var imgStyle={
      width: '100%',
      padding: '0',
      margin: '0'
    }

    findKegIndex(keg){
      for(let i=0; i<this.status.masterKegList.length; i++)
        if(this.status.masterKegList[i].id == keg.id)
          return i;
    }

    handlePintSubtraction(keg){
      const updatedKegList = this.status.masterKegList.slice();
      updatedKegList[findKegIndex(keg.id)].pint--;
      setStatus({masterKegList : updatedKegList});
    }

    handleNewKegCreation(newKeg){
      const updatedKegList = this.status.masterKegList.slice();
      updatedKegList.push(newKeg);
      setStatus({masterKegList : updatedKegList});
    }

    handleUpdateKeg(keg){
      const updatedKegList = this.status.masterKegList.slice();
      updatedKegList[findKegIndex(keg.id)] = keg;
      setStatus({masterKegList : updatedKegList});
    }

    handleDeleteKeg(keg){
      const updatedKegList = this.status.masterKegList.slice();
      updatedKegList.splice(findKegIndex(keg.id), 1);
      setStatus({masterKegList : updatedKegList});
    }

    return (
      <div style={styleHeaderMargin}>
        <Header/>
        <img src={headerImg} style={imgStyle}></img>
        <Switch>
        <Route exact path='/' render => {<KegsList ticketList={masterTicketList} onSubtractPint={handlePintSubtraction}} />
        <Route path='/newkeg' render => {NewKeg onNewKegCreation={handleNewKegCreation}} />
         // <Route exact path='/' component={KegsList} />
          // <Route path='/newkeg' component={NewKeg} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
