import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [
  {
    task: 'Walk the dog',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Buy groceries',
    id: Date.now()+1,
    completed: false
  },
  {
    task: 'Clean the house',
    id: Date.now()+2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleItem = (id) => {
    const newTodos = this.state.todos.map(item => {
      if (item.id === id) {
        return( {
          ...item,
          completed: !item.completed
        });
      } else {
        return item;
      }
    });

    this.setState({
      todos:newTodos
    });
  }

  addItem = (itemTask)=> {
    this.setState({
      todos: [...this.state.todos, {
        task: itemTask,
        id: Date.now(),
        completed: false
      }]
    });
  }

  clearCompleted = e => {
    this.setState({
      todos: this.state.todos.filter(item => (!item.completed))
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>~TODO TASK TRACKER~</h1>
          <TodoForm addItem={this.addItem}/>
        </div>

        <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
