import React from 'react';
import EditTodoForm from './EditTodoForm';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideForm: true
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState({hideForm: !this.state.hideForm});
  }
  
  render() {
    let output = (this.state.hideForm === true ? (
        <span><span>{this.props.text}</span>
        <span><button onClick={this.handleEdit}>Edit</button></span></span>
      ) : 
      <EditTodoForm id={this.props.id} text={this.props.text} edit={this.props.edit} returnToFalse={this.handleEdit}/>);
    return (
      <div>
        {output}
        <button onClick={() => this.props.delete(this.props.id)}>x</button>
      </div>
    )
  }
}

export default Todo;