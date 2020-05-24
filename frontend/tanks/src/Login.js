import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
 <p>Inside Login </p>
 <div className="row">
                        <div className="col-4">
                            <form>
                                <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" 
                                placeholder="className@example.com"></input>
                                </div>
                                <button type="submit" class="btn btn-primary">Logga in </button>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}
