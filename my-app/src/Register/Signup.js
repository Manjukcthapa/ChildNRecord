import React from "react";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      repassword: "",
    };
  }

  handleChange = e => {
    let target = e.target;
    let value = target.value;
    let name = target.name
    this.setState({ [name]: value })
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <lable>UserName</lable>
          <input
            type="text"
            id="username"
            placeholder="Enter Your Username "
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <lable>Password</lable>
          <input
            type="text"
            id="password"
            placeholder="Enter Your Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <lable>Re-Password</lable>
          <input
            type="text"
            id="repassword"
            placeholder="Enter Your Re-Password"
            name="repassword"
            value={this.state.repassword}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Signup;
