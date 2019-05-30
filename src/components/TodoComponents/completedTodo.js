import React from 'react'

export default function Todo(props) {
    const { completed } = props;
    
    return (
        <div>
            <p> -> {completed.task}</p>
        </div>
    )
}
