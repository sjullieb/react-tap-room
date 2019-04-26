import React from "react";
import Header from "./Header";
// import ProduceTable from "./ProduceTable";
// import ScheduleTable from "./ScheduleTable";
import { Switch, Route } from 'react-router-dom';

function App(){

  return (
    <div>
      <Header/>
      <Switch>
        // <Route exact path='/' component={ScheduleTable} />
        // <Route exact path='/produce' component={ProduceTable}/>
      </Switch>
      {/* <ScheduleTable/>
      <br/>
      <ProduceTable/> */}
    </div>
  );
}

export default App;
