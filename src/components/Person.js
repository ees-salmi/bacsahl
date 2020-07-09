import React from 'react'

function Person({student},{key}) {
    console.log({student})
    return (
        <div>
          <h2>  i am {student.name} i have {student.age} years of yearz i am glad to know you </h2>
            
        </div>
    )   
}

export default Person

