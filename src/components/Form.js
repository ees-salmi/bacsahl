import React, { Component } from 'react'


const heading = {
    color : 'green',
    font : '30px',  
  
}

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : 'elmustapha',
             password : 'pass'
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username : event.target.value
        })

    }
    handlePasswordChange = (event) => {
        this.setState({
            password : event.target.value
        })

    }
    
    render() {
        console.log("form")
        return (
            <form>
            <div>
                <label style={heading}>username : </label>
                <input type="text" style={heading} value={this.state.username} onChange={this.handleUserNameChange} ></input>
            </div>
            <div>
                <label>password : </label>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} ></input>                              
            </div>
            <div>
                <label>Comments : </label>
                <textarea  value={this.state.password} onChange={this.handlePasswordChange} >
                </textarea>                              
            </div>
            </form>
        )
    }
}
