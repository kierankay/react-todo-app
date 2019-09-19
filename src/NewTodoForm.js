import React from 'react';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.create(this.state.todo);
    this.setState({todo: ""});
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="todo">New Todo:</label>
        <input id="todo" name="todo" value={this.state.todo}></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default NewTodoForm;