import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li>{this.props.text} <button onClick={() => this.props.delete(this.props.id)}>x</button></li>
    )
  }
}

export default Todo;