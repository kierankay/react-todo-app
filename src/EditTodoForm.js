import React from 'react';

class EditTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
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
    this.props.edit(this.props.id, this.state.text)
    this.props.returnToFalse();
    this.setState({text: ""});
  }

  render() {
    return (
      <form onChange={this.handleChange}>
        <input name="text" id="text" value={this.state.text} />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default EditTodoForm;

