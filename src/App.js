import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter,Route, Link,Switch } from "react-router-dom";
import Login from './Login';
import Signup from './SignUp';
import Questions from './Questions';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/" component={Signup} />
          <Route exact path ="/question" component={Questions} />
      </Switch>
     </HashRouter>
    </div>
  );
}

export default App;
