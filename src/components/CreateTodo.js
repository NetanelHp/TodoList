import React, { Component } from "react";

export class CreateTodo extends Component {
  state = {
    todo_description: "",
    todo_completed: false,
  };

  onChangeTodoDescription = (e) => {
    this.setState({ todo_description: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(`todo: ${this.state.todo_description}`);

    this.setState({
      todo_description: "",
      todo_completed: false,
    });
  };
  // test
  render() {
    return (
      <div>
        <div className="row">
          <form onSubmit={this.onSubmit} className="col s12">
            <div className="input-field inline">
              <input
                onChange={this.onChangeTodoDescription}
                value={this.state.todo_description}
                id="email_inline"
                type="text"
                className="validate"
              />
              <label htmlFor="email_inline">Todo</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success={`${this.state.todo_description} is submitted`}
              >
                What im gonna do today
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTodo;
