import React from 'react'

export default function TodoForm(props) {
    const { values, onChange, onClick, removeCompleted } = props;
    return (
        <div className="todoForm">
            <div className="newTodo">
                <input value={values} onChange={onChange}  type="input" />
                <button onClick={onClick}>+</button>
            </div>

            <div className="todoFormButton">
                <button onClick={removeCompleted}>Clear Completed</button>
                <button>Clear All</button>
            </div>
            
        </div>
    )
}
