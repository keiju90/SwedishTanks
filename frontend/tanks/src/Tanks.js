import React from 'react'

    const Tanks = ({ tanks }) => {
      return (
        <div>
          <h1>Tanks List</h1>
          {tanks.map((tank) => (
            <div>
              <div>
                <h3>{tank.tankname}</h3>
                <h6>{tank.crew}</h6>
                <h6>{tank.velocity}</h6>
              </div>
            </div>
          ))} 
        </div>
      )
    };

    export default Tanks