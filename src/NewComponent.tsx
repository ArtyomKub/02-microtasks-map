import React from 'react';

type NewComponentType= {
   students: Array<StudentsType>
}

type StudentsType = {
    age: number
    name: string
    id: number
}

export const NewComponent = (props:NewComponentType) => {
    debugger
    return (
        <div> New component </div>
    )
}