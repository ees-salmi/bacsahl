import React, { Component } from 'react'

export class EventBind extends Component {
constructor(props) {
    super(props)

    this.state = {
         message : 'hello mustapha'
    }
    this.handler = this.handler.bind(this)
}
    handler(){


        this.setState({
            message : 'good bye !'
        })
        console.log(this)
        
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.handler.bind(this)}>click here</button> */}
                {/* <button onClick={() => this.handler()}>click here</button> */}
                <button onClick={this.handler}>click here</button>
            </div>
        )
    }
}

export default EventBind
