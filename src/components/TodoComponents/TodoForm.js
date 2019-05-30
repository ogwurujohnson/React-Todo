import React from 'react'

export default function TodoForm(props) {
    const { values, onChange, onClick, removeCompleted } = props;
    return (
        <div>
            <input value={values} onChange={onChange}  type="input" />
            <button onClick={onClick}>Add Todo</button>
            <button onClick={removeCompleted}>Clear Completed</button>
        </div>
    )
}
