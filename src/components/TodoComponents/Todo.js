import React from 'react'

export default function Todo(props) {
    const { todo, onFinish } = props;
    let className = '';
    className = todo.completed?"completed":"pending"
    
    return (
        <div>
            <p className={className}>
                 <input onChange={()=>{
                     onFinish(todo.id)
                 }} type="checkbox" />

                 {todo.task}
            </p>
        </div>
    )
}
