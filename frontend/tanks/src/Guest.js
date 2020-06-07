import React, { Component } from 'react'
import SearchTable from "./SearchTable";
import ResultTable from "./ResultTable";

export default class Guest extends Component {
    render() {
        return (
            <div>
                {/* <p>Inside Guest</p> */}
                <SearchTable>
                </SearchTable>
                <ResultTable></ResultTable>
            </div>
        )
    }
}
