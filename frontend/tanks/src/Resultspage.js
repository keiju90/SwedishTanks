import React, { Component } from 'react'
import Tanks from "./Tanks";

class Resultspage extends Component {
// tanks array that stores all tanks from db 
  state = {
    tanks: []
  }

  //fetches tanks from db 
  componentDidMount() {
    fetch('http://localhost:4000/tanks')
    .then(res => res.json())
    .then((data) => {
      this.setState({ tanks: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="p-3">
      <Tanks tanks={this.state.tanks}/>
      </div>
    );
  }
}

export default Resultspage;

