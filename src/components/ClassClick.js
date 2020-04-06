import React, { Component } from 'react'

export class ClassClick extends Component {

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
