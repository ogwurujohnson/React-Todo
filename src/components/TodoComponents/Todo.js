import React from 'react'

export default function Todo(props) {
    const { todo, onFinish, removeCompleted } = props;
    let className = '';
    className = todo.completed?"completed":"pending"
    
    return (
        <div>
            <p className={className}>
                 <input onChange={()=>{
                     onFinish(todo.id)
                 }} type="checkbox" />

                 {todo.task}

                 <button onClick={() => {
                     removeCompleted(todo.id)
                 }}>Remove</button>
            </p>
        </div>
    )
}
