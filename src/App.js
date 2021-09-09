import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


import CreateUser from './components/create-user.component';
import UserList from './components/user-list.component';
import EditUser from './components/edit-user.component';



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
            <Route path="/" exact component={UserList}/>
            <Route path="/create" component={CreateUser} />
            <Route path="/edit/:id" component={EditUser} />
          </div>
      </Router>
    )
  }
}

export default App;
