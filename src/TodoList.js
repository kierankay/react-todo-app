import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
import uuid from 'uuid/v4'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  createTodo(text) {
    this.setState({todos: [...this.state.todos, {text, id: uuid()}]});
  }

  deleteTodo(id) {
    let filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: filteredTodos});
  }

  editTodo(id, text) {
    let editedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    })
    this.setState({todos: editedTodos});
  }

  render() {
    let renderedTodos = this.state.todos.map(todo => (
      <Todo text={todo.text} key={todo.id} id={todo.id} delete={this.deleteTodo} edit={this.editTodo}/>
    ))
    return (
      <div>
        <NewTodoForm create={this.createTodo}/>
        <h1>Your Todos:</h1>
        <div>{renderedTodos}</div>
      </div>
    )
  }
}

export default TodoList;