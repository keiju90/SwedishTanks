import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
            Swedish Tanks
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
        
                <li className="nav-item">
                    <Link to="Guest" className="nav-link">Guest</Link>
                </li>
                <li className="nav-item">
                <Link to="Login" className="nav-link">Admin log in </Link>
                </li>
                
            </ul>
        </div>
        </nav>
        )
    }
}
