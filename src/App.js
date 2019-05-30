import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

import './components/TodoComponents/Todo.css';

library.add(faCheck, faTimes, faTrash, faPlus)

const defaultContent = [
  {
    task: 'Visit Melvine',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Go to Hospital',
    id: 1528817084358,
    completed: false
  }
]

class App extends Component {
  constructor () {
    super();

    this.state = {
      todo: defaultContent,
      completedtodo: [],
      value: ''
    }
  }

  async componentDidMount() {
    const item = localStorage.getItem('todos');
    const itemData = JSON.parse(item);
    await this.setState({todo: itemData || defaultContent})

    const removed = localStorage.getItem('removed');
    const removedData = JSON.parse(removed);
    await this.setState({completedtodo: removedData || []})
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  onChange = (event) => {
    this.setState({value: event.target.value});
  }

  
  addTodo = async () => {
   const newTodo = {
      task: this.state.value,
      id: Date.now(),
      completed: false
    }
    if (newTodo.task){
      await this.setState({todo: [...this.state.todo, newTodo] })
      await localStorage.setItem('todos', JSON.stringify(this.state.todo));
    } else {

    }
    
    this.setState({value: ''});
  }

  onFinish = (index) => {
    this.setState({todo: this.state.todo.map(singletodo => {
      if(singletodo.id === index) {
        singletodo.completed = !singletodo.completed
      }
      return singletodo;
    })})
  }

  removeCompleted = async () => {
    const newArr = this.state.todo.filter(todos => todos.completed === true);
    await this.setState({completedtodo: [...this.state.completedtodo, ...newArr]});
    await localStorage.setItem('removed', JSON.stringify(this.state.completedtodo));

    await this.setState({todo: this.state.todo.filter(todos => todos.completed === false)});
    await localStorage.setItem('todos', JSON.stringify(this.state.todo));
  }

  removeSingle = async (index) => {
    const newArr = this.state.todo.filter(todos => todos.id === index);
    await this.setState({completedtodo: [...this.state.completedtodo, newArr[0]]});
    await localStorage.setItem('removed', JSON.stringify(this.state.completedtodo));

    await this.setState({todo: this.state.todo.filter(todos => todos.id !== index)});
    await localStorage.setItem('todos', JSON.stringify(this.state.todo));
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="todo">
          <TodoForm values={this.state.value} removeCompleted = {this.removeCompleted} onChange={this.onChange} onClick={this.addTodo}/>
          <TodoList todos={this.state.todo} removeCompleted = {this.removeSingle} completed={this.state.completedtodo} onFinish={this.onFinish}/>
        </div>
      </div>
     
    );
  }
}

export default App;
