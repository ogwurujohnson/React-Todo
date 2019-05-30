import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TodoForm(props) {
    const { values, onChange, onClick, removeCompleted } = props;
    return (
        <div className="todoForm">
            <div className="newTodo">
                <input value={values} onChange={onChange}  type="input" />
                <button onClick={onClick}><FontAwesomeIcon icon="plus"/></button>
            </div>

            <div className="todoFormButton">
                <button onClick={removeCompleted}><FontAwesomeIcon icon="trash"/>&nbsp; Clear Completed</button>
                <button><FontAwesomeIcon icon="trash"/>&nbsp; Clear All</button>
            </div>
            
        </div>
    )
}
