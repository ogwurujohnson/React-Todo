import React from 'react'

export default function Todo(props) {
    const { todo, onFinish, removeCompleted } = props;
    let className = '';
    className = todo.completed?"completed":"pending"
    
    return (
        <div className="singleTodo">
            <p className={className}>
                 <input onChange={()=>{
                     onFinish(todo.id)
                 }} type="checkbox" />{todo.task}
            </p>
            <button className="removeSelected" onClick={() => {removeCompleted(todo.id)}}>
                X
            </button>
        </div>
    )
}
