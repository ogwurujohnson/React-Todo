import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Todo(props) {
    const { todo, onFinish, removeCompleted } = props;
    let className = '';
    className = todo.completed?"completed":"pending"
    
    return (
        <div>
            <div className="search">
                <input type="text" value/>
            </div>
            <div className="singleTodo">
                <p className={className}>
                    <input onChange={()=>{
                        onFinish(todo.id)
                    }} type="checkbox" />{todo.task}
                </p>
                <button className="removeSelected" onClick={() => {removeCompleted(todo.id)}}>
                    <FontAwesomeIcon icon="trash" />
                </button>
            </div>
        </div>
       
    )
}
