import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Home from "./Home";
import Guest from "./Guest";
import Login from "./Login";



function App() {

  return (
    <BrowserRouter>
    <div className="App" 
    style={{backgroundColor: '#dddddd'}}>
      <Header></Header>
      {/* // style, so that the gray backround reaches all the way down */}
      <main style={{ height:"1000px" }}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/guest" component={Guest}/> 
          <Route exact path="/login" component={Login}/> 
        </Switch>
      </main>
    </div>
    </BrowserRouter>
  );

}

export default App;





