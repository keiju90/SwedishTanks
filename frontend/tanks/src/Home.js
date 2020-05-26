import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tankoftheweek from "./Tankoftheweek"

export default class Home extends Component {
    callAPI() {
        fetch("http://localhost:4000/tanks")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <p>Inside home </p>
                <Tankoftheweek></Tankoftheweek>
            </div>
        )
    }
}
//componentdidmount