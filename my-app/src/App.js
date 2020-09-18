import React from 'react';
import './App.css';
import SignUp from "./Component/Register/Signup"
import LogIn from "./Component/Register/LogIn"
import { Route, Switch } from 'react-router-dom'
import Header from "./Component/Header"



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      
      <Route exact path="/signup" component={SignUp} />
      <Route  path="/LogIn" component={LogIn} />
     </Switch>
    </div>
  );
}

export default App;
