import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{
            backgroundColor: '#484747'
                                }}> 
        <Link to="/" className="navbar-brand" style={{color: "#c2d671" }}>
            Swedish Tanks 
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
        
                <li className="nav-item">
                    <Link to="Guest" className="nav-link" style={{color: "#c2d671" }}>Guest</Link>
                </li>
                <li className="nav-item">
                <Link to="Login" className="nav-link" style={{color: "#c2d671" }}>Admin log in </Link>
                </li>
                
            </ul>
        </div>
        </nav>
        )
    }
}
