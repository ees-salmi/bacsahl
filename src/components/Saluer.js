import React from 'react'

// function Saluer(){

//     return <h1>hello i'am from a function</h1>
// }

const Saluer= props =>{
    console.log(props)
    return ( <div>
    <h2>hello this an arrow test funtion {props.name} you're a {props.heroName} !</h2>
  
    {props.children}
    </div>
    )
}
export default Saluer
