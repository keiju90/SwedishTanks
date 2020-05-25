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
      <main>
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


// ***** KOD FR ÅSA ****************
// import React, { useState } from 'react';
// import './App.css';

 

// import AddTankFrom from './components/AddTankForm'
// import tanks from './components/Tanks'

 


// function App() {
//   const [newTanks, setNewTanks] = useState({});
//   const [tanks, setTanks] = useState([]);

 

//   const handleInputToNewTank= e => setNewTank({...newTank, [e.target.id]: e.target.value});
  
//   const addNewTank = e => {
//     e.preventDefault();
//     setTanks([...tanks, newTank]);
//   }

 

//   const removeTanks = e => {
//     const nameToDelete = e.target.parentNode.firstElementChild.innerText
//     setTanks(tank.filter(tank => tank.name !== nameToDelete));
//   }
  
  
//   const fetchTanks = () => {
//     fetch('http://localhost:3000/tanks')
//     .then(res => res.json())
//     .then(data => setTanks(data.tanks))
//   }
  
  
//   return (
//     <div className="App">
//       <Tanks fetchTanks={fetchTanks} removeTanks={e=>{removeTanks(e)}} tanks={tanks} />
//       <AddTanksFrom addNewTank={e=>{addNewTanks(e)}} handleInputToNewTank={e=>{handleInputToNewTank(e)}}/>
//     </div>
//   );
// }

 

// export default App;