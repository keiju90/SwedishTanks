import React, { Component } from 'react';

import Tanks from "./Tanks";

class Home extends Component {

  state = {
    tanks: []
  }

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
      <div>
      <Tanks tanks={this.state.tanks}/>
      </div>
    );
  }
}

export default Home;