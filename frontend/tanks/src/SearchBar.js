import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


export default class SearchBar extends Component {
    render() {
        return (
<div className="searchBar">
    <form>    
    <div class="form-group input-group input-group-sm mb-3">
        <label for="exampleFormControlInput1">Fordonsnamn</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
    </div>    

    <div className="form-group input-group input-group-sm mb-3">
        <label for="exampleFormControlSelect1">Besättning antal</label>
        <select className="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        </select>
    </div>

    <div class="form-group input-group input-group-sm mb-3">
        <label for="exampleFormControlInput1">Hästkrafter</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
    </div>


    <div class="form-group input-group input-group-sm mb-3">
        <label for="exampleFormControlInput1">Hastighet km/h</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
    </div>

    <div className="form-group input-group input-group-sm mb-3">
        <label for="exampleFormControlTextarea1">Sök fritext</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Sök</button>

    </form>
</div>
        )
    }
}
