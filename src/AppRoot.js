import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { primaryList } from './ListProvider';

import { About } from './About.js';
import { Home } from './Home.js';
import TodoPage from './TodoPage.js';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);

    //primaryList is singleton list
    this.list = primaryList;

    //populate test data
    this.list.addItem('Make Breakfast');
    this.list.addItem('Make Lunch');
    this.list.addItem('Make Dinner');
  }

  render() {
    const todoPage = () => {
      return (<TodoPage list={this.list}/>)
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


export default AppRoot;