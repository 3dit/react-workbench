import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { appData: props.appData };
    
    //we can create shorter reference to the list,
    //but when we replace the reference (creating new list when deleting an item)
    //we have to remember to update the state.appData.list reference.
    //is this a good idea? Not sure.
    this.list = this.state.appData.list;

    this.doKey = this.doKey.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

  }

  addTodo(todoValue) {
    var max = 0;

    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].id > max) max = this.list[i].id;
    }

    this.list.push({ id: max + 1, name: todoValue });

    this.setState(this.state); //performs optimal redraw if something changed
  }

  deleteTodo(id) {
    this.list = this.list.filter(function (i) { return !(i.id == id) });

    //replacing list reference means state has old reference so we update it
    this.state.appData.list = this.list;

    this.setState(this.state);
  }

  doKey(e) {
    this.state.value = e.target.value;
    if (e.keyCode === 13) {
      this.addTodo(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input onKeyDown={this.doKey} type="text" />
        <TodoList
          appData={this.state.appData}
          deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default TodoPage;
