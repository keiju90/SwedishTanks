import React, { Component } from 'react';
import pbv from "./pbv.JPG";
import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {

render() {
    return (
      <div className="container-lg col-9 bg-light" >
      <h3>Tank of the week</h3>
      <br></br>
      <img className="float-right ml-3" alt="Pansarbandvagn 301" style={{ width:"400px" }} src={pbv}/>
      <h5 className="text-success">Pansarbandvagn 301 - PBV301</h5>
      <p className="font-weight-bold">BESÄTTNING: 2  |  HÄSTKRAFTER: 2  |  HASTIGHET KM/H: 100</p>
      
      <p>Pbv 301 utvecklades som en tillfällig lösning för att erbjuda pansarförbandens skyttesoldater 
        splitterskyddad transport i väntan på att Pbv 302 skulle levereras. Vagnen bestod av ett chassi från 
        den utrangerade Stridsvagn m/41 med ett nytt överrede. Vagnen fick också en ny 4-cylindrig luftkyld 
        boxermotor från Svenska Flygmotor AB (SFA), ursprungligen utvecklad för Saab Safir. 
        Ombyggnationen utfördes av Hägglund och Söner och 220 vagnar levererades under 1962 och 1963. 
        De organiserades i en pansarbataljon i varje pansarbrigad. Vagnarna räckte 
        inte till samtliga arton bataljoner, utan en del använde istället ”KP-bilar” 
        eller vanliga lastbilar. </p>
      
      </div>
    );
  }
}

export default Home;
