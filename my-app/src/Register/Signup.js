import React from "react";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    
  }

  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Form is submited');
    }
  }

  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      errors["username"] = <p className="formvalidation">Please enter your username</p>
    }


    if (!input["password"]) {
      isValid = false;
      errors["password"] = <p className="formvalidation">Please enter your password</p>
    }
  
    
   

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = <p className="formvalidation">Please enter your confirm password</p>
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["password"] = <p className="formvalidation">Passwords don't match</p>
      }
    } 

    this.setState({
      errors: errors
    });

    return isValid;
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.input.username}
              onChange={this.handleChange}
              class="form-control"
              id="Username"
            />

            <div className="text-danger">{this.state.errors.username}</div>
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control"
              id="password"
            />

            <div className="text-danger">{this.state.errors.password}</div>
          </div>

          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input
              type="password"
              name="confirm_password"
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control"
              id="confirm_password"
              
            />

            <div className="text-danger">
              {this.state.errors.confirm_password}
            </div>
          </div>

          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default Signup;
