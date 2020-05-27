import React, { Component } from 'react'

export default class Resultspage extends Component {
    render() {
        return (
            <div>
                <p>This is resultspage component</p>


            </div>
        )
    }
}

// *********************KOD FRÅN ÅSA**********
// import React, { useEffect, useState} from 'react'

// const Tanks = (props) => {

//   useEffect(()=>{
//     props.fetch();
//   },[])
    
//   return (
//     <div className="wrapper">
//       <h3>Tanks list</h3>
//       <ul>
//         {props.tanks.map((tank, i) => {
//           return (<div key={i} className="tankWrapper"> 
//               <li>{tank.name}</li> 
//               <button onClick={props.removetank} className="delete btn btn-danger btn-small">delete</button>
//             </div>)
//         })}   
//       </ul>
//     </div>
//   )
// }


// export default Tanks;