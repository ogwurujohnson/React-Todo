import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Todo(props) {
    const { completed } = props;
    
    return (
        <div className="singleTodo">
            <p>{completed.task}</p>
            <button className="old">
                <FontAwesomeIcon icon="check" />
            </button>
        </div>
    )
}
