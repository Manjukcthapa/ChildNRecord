import React from "react";

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };
  }

  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["username"] = "";
      input["password"] = "";
      this.setState({ input: input });

      alert("Form is submited");
    }
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      errors["username"] = (
        <p className="formvalidation">Please enter your username</p>
      );
    }
    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 8) {
        isValid = false;
        errors["password"] = (
          <p className="formvalidation">
            Password must be at least 8 characters long!{" "}
          </p>
        );
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = (
        <p className="formvalidation">Please enter your password</p>
      );
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label for="username">UserName:</label>
          <input
            type="text"
            name="username"
            value={this.state.input.username}
            onChange={this.handleChange}
            class="form-control"
            id="Username"
          />
          </div>
          <div className="text-danger">{this.state.errors.username}</div>
         
         <div>
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.input.password}
            onChange={this.handleChange}
            class="form-control"
            id="password"
          />
          </div>
          <div className="text-danger">{this.state.errors.password}</div>

          <button type="submit" value="Submit" class="btn btn-success">
            Sumit
          </button>
        </form>
      </div>
    );
  }
}

export default LogIn;
