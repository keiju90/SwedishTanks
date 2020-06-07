import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


export default class SearchBar extends Component {
    render() {
        return (
<div className="searchBar p-3">
<h3 >Sök Tank</h3>
    <form>    
    <div class="form-group input-group input-group-sm mb-3">
        <label className="pr-3" for="exampleFormControlInput1">Fordonsnamn</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
    </div>    

    <div className="form-group input-group input-group-sm mb-3">
        <label className="pr-3" for="exampleFormControlSelect1">Besättning antal</label>
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
        <label className="pr-3" for="exampleFormControlInput1">Hästkrafter</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
    </div>


    <div class="form-group input-group input-group-sm mb-3">
        <label className="pr-3" for="exampleFormControlInput1">Hastighet km/h</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
    </div>

    <div className="form-group input-group input-group-sm mb-3">
        <label className="pr-3" for="exampleFormControlTextarea1">Sök fritext</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Sök</button>

    </form>
</div>
        )
    }
}

// **********KOD FR ÅSA =) *****************
// Form = (props) => {
//     return (
//       <form className="wrapper" onSubmit={(e)=>props.addNewStudent(e)}>
//         <h3>Add student</h3>
//         <div className="form-group">
//           <label>Email address </label>
//           <input onChange={e=>{props.handleInputToNewStudent(e)}} required type="email" className="form-control" id="email" placeholder="email..."/>
//         </div>
//         <div className="form-group">
//           <label>Name</label>
//           <input onChange={e=>{props.handleInputToNewStudent(e)}} required type="text" className="form-control" id="name" placeholder="name..."/>
//         </div>
//         <div className="form-group">
//           <label>Street</label>
//           <input onChange={e=>{props.handleInputToNewStudent(e)}} required type="text" className="form-control" id="adressStreet" placeholder="street..."/>
//         </div>
//         <div className="form-group">
//           <label>Areacode</label>
//           <input onChange={e=>{props.handleInputToNewStudent(e)}} required type="text" className="form-control" id="areacode" placeholder="areacode..."/>
//         </div>
//         <div className="form-group">
//           <label>City</label>
//           <input onChange={e=>{props.handleInputToNewStudent(e)}} required type="text" className="form-control" id="city" placeholder="city..."/>
//         </div>
//         <button type="submit" className="btn btn-info" >Submit new student</button>
//       </form>
