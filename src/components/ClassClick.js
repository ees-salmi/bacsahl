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
        
    }
    render() {
        return (
            <div>
                <button onClick={this.handler}>click me again</button>
            </div>
        )
    }
}
export default ClassClick
