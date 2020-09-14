import React from "react";

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
        username: '',
        password: '',
        repassword: ''
        }
        }


  render(){
      return(
          <div>
              <form>
                  <lable>UserName</lable>
                  <input
                  type="text"
                  id="Username"
                  placeholder="Enter Your Username "
                  name="Username"
                  />
                   <lable>Password</lable>
                  <input
                  type="text"
                  id="Password"
                  placeholder="Enter Your Password"
                  name="Password"
                  />
                  <lable>Re-Password</lable>
                  <input
                  type="text"
                  id="Re-Password"
                  placeholder="Enter Your Re-Password"
                  name="Re-Password"
                  />
              </form>
          </div>
      )
    
}

}

export default Signup;

