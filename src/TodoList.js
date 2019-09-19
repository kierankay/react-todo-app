import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
import uuid from 'uuid/v4'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  createTodo(text) {
    this.setState({todos: [...this.state.todos, {text: text, id: uuid()}]})
  }

  deleteTodo(id) {
    let filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: filteredTodos});
  }

  render() {
    let renderedTodos = this.state.todos.map(todo => <Todo text={todo.text} id={todo.id} delete={this.deleteTodo}/>)
    return (
      <div><NewTodoForm create={this.createTodo}/>
      <ul>{renderedTodos}</ul>
      </div>
    )
  }
}

export default TodoList;