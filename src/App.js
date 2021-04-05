import React from 'react';
import ReactDOM from 'react-dom';

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
    id: Date.now(),
    completed: false
  },
  {
    task: 'Clean the house',
    id: Date.now(),
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

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>~TODO TASK TRACKER~</h1>
          <TodoForm />
        </div>

        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
