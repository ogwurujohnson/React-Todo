// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'
import CompletedTodo from './completedTodo'


export default function TodoList(props) {
    const { todos, onFinish, completed, removeCompleted } = props;
    return (
        <div>
            <h3>Todos</h3>
            {todos.map(todo => {
                return <Todo  key={todo.id} todo={todo} onFinish={onFinish} removeCompleted={removeCompleted} />
            })}
            <h3>History</h3>
            {completed.map(todo => {
                return <CompletedTodo key={todo.id} completed={todo}/>
            })}
        </div>
    )
}
