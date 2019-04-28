import React from "react";
import Header from "./Header";
import NewKeg from "./NewKeg";
import Error404 from "./Error404";
// import ProduceTable from "./ProduceTable";
// import ScheduleTable from "./ScheduleTable";
import KegsList from './KegsList';
import { Switch, Route } from 'react-router-dom';
import headerImg from '../assets/images/header2.jpg';

function App(){
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
  return (
    <div style={styleHeaderMargin}>
      <Header/>
      <img src={headerImg} style={imgStyle}></img>
      <Switch>
        <Route exact path='/' component={KegsList} />
        <Route path='/newkeg' component={NewKeg} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
