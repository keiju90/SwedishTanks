import React from 'react'

    const Tanks = ({ tanks }) => {
      return (
        <div>
          <h1>Tanks List</h1>
          {tanks.map((tank) => (
            <div key="">
              <div>
                <h1>{tank.tankname}</h1>
                <h6>{tank.crew}</h6>
                <p>{tank.velocity}</p>
              </div>
            </div>
          ))} 
        </div>
      )
    };

    export default Tanks