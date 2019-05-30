import React from 'react'

export default function Todo(props) {
    const { completed } = props;
    console.log(completed)
    
    return (
        <div>
            <p>{completed.task}</p>
        </div>
    )
}
