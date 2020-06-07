import React, { Component } from 'react'
import Resultspage from "./Resultspage"

export default class Results extends Component {
    render() {
        return (
            <div className="container-sm col-5 bg-light mt-5 ">
                {/* <p>Inside Results component</p> */}
                <Resultspage></Resultspage>

            </div>
        )
    }
}
