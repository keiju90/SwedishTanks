import React from 'react'

    const Tanks = ({ tanks }) => {
      return (
        <div>
          <h3>Resultat</h3>
          <br></br>
          
          {tanks.map((tank) => (
            <div>
              <div>
                <h5 className="text-success">Tanknamn: {tank.tankname}</h5>
                <p>Besättning antal: {tank.crew}</p>
                <p>Hastighet: {tank.velocity}</p>
              </div>
            </div>
          ))} 
        </div>
      )
    };

    export default Tanks