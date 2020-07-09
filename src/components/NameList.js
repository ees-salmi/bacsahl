import React from 'react'
import Person from './Person';

function NameList() {
    // const names = ['mustapha','zakaria','yassine'];
    // const etudient = names.map(student => (
    //     <h2>
    //         i am {student} i have years old;
    //     </h2>
    //     ))
    const students = [
        {
            id : 1,
            name : 'elmustapha',
            age : 30
        },
        {
            id : 2,
            name : 'yassine',
            age : 26
        },
        {
            id : 3,
            name : 'upwork',
            age : 30
        }
    ]
    
    
    const etudient = students.map((student,index) => <Person key={index}   student={student}/>)
    


    return <div>{etudient}</div>
    
}

export default NameList
