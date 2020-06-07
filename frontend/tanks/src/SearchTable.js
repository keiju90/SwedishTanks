import React, { Component } from 'react';
import SearchBar from "./SearchBar";

export default class SearchTable extends Component {
    render() {
        return (
            <div className="container-sm col-5 bg-light" >
            {/* <div border style={{
                backgroundColor: '#ffffff'
                                    }}> */}
               
                <SearchBar></SearchBar>
            </div>
        )
    }
}
