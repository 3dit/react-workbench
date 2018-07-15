import React, { Component } from 'react';

class TodoList extends React.Component {
  constructor(props) {

    super(props);

    this.state = { appData: props.appData };

    //TodoPage component handles delete functionality, so when it needs
    //to be performed we use this callback
    this.deleteTodo = props.deleteTodo;

    this.delete = this.delete.bind(this);
  }

  delete(id) {
    this.deleteTodo(id);
  }

  render() {
    const itemsNode = this.state.appData.list.map((item) => {
      return (
        <li key={item.id}>
          {item.name}
          <button
            value={item.id}
            onClick={() => this.delete(item.id)}>Delete
          </button>
        </li>);
    });

    return (<ul>{itemsNode}</ul>)
  }
}


export default TodoList;
