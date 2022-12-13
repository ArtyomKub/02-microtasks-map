import React from 'react';

type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    age: number
    name: string
    id: number
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <ul>
            {props.students.map((objectFromStudentsArray, index) => {
                return (
                    <li key={objectFromStudentsArray.id}>
                        <span>Name: {objectFromStudentsArray.name} </span>
                        <span>Age: {objectFromStudentsArray.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}