import React from "react";
import Header from "./Header";
import NewKeg from "./NewKeg";
import Error404 from "./Error404";
// import ProduceTable from "./ProduceTable";
// import ScheduleTable from "./ScheduleTable";
import KegsList from './KegsList';
import { Switch, Route } from 'react-router-dom';

function App(){
  var styleHeaderMargin={
    marginTop: '110px',
    fontFamily: "'Trebuchet MS', Helvetica, sans-serif"
  }
  return (
    <div style={styleHeaderMargin}>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegsList} />
        <Route path='/newkeg' component={NewKeg} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
