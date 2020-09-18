import React from 'react';
import './App.css';
import SignUp from "./Register/Signup"
import LogIn from "./Register/LogIn"
import { Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route  path="/LogIn" component={LogIn} />
     </Switch>
    </div>
  );
}

export default App;
