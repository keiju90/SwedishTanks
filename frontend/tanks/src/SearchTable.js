import React, { Component } from 'react';
import SearchBar from "./SearchBar";

export default class SearchTable extends Component {
    render() {
        return (
            <div border style={{
                backgroundColor: '#ffffff'
                                    }}>
                <SearchBar></SearchBar>
            </div>
        )
    }
}
