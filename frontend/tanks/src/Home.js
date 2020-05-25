import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tankoftheweek from "./Tankoftheweek"

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Inside home </p>
                <Tankoftheweek></Tankoftheweek>
            </div>
        )
    }
}
