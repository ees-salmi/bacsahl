import React from 'react'

function FunctionClick() {
    function handler(){
        console.log("i am clicked")
    }
    return (
        <div>
            <button onClick={handler}>Click</button>
        </div>
    )
}

export default FunctionClick
