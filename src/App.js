import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from './components/create-user.component';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  render(){
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">User Registration App</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-link">
                    <Link to="/" className="nav-link">User Information Table</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/create" className="nav-link">Create User</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Route path="/create" component={CreateUser} />
          </div>
      </Router>
    )
  }
}

export default App;
