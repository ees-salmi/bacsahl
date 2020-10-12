import React, { Component } from 'react'

export class ClassClick extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "elmustapha"
        }
    }
   
    handler(){
        console.log('i am clicked again')
        let today = new Date();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date=months[parseInt(today.getMonth())]+" "+today.getDate() +","+today.getFullYear();
       
        console.log(date)
        
    }
    render() {
        return (
            <div>
                <button onClick={this.handler}>click me again</button>
            </div>
        )
    }
}
export default ClassClick;
