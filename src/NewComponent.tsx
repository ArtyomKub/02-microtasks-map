type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number
    name: string
    age: number
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