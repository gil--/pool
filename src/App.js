import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <ul>
            <li><Link to={`/profile`}>Profile Page</Link></li>
            <li><Link to={`/login`}>Login Page</Link></li>
          </ul>
        </div>
      </Router>
  }
}

export default App;
