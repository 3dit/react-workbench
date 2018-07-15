import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { About } from './About.js'
import { Home } from './Home.js'
import TodoPage from './TodoPage.js'

class BaseApp extends React.Component {
  constructor(props) {
    super(props);
    console.log('BaseApp props', props);
    this.state = { appData : props.appData };
  }

  render() {
    
    const todoPage = () => {
      return (<TodoPage appData={this.state.appData} />)
    };
    
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todolist">ToDo List</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todolist" component={todoPage} />
        </div>
      </Router>
    )
  }
}


export default BaseApp;