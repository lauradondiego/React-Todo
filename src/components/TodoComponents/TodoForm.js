import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          className="input"
          type="text"
          value={this.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button className="add-btn">Add Todo</button>
        <button className="clear-btn" onClick={this.props.clearCompleted}>
          Clear Completed Todo
        </button>
      </form>
    );
  }
}

export default TodoForm;
