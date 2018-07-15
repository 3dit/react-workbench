import React, { Component } from 'react';
import ActionList from './ActionList';
import { primaryList } from './ListProvider';

class TodoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { list: props.list, itemsSnapshot: null };

    this.doKey = this.doKey.bind(this);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.doSnapshot = this.doSnapshot.bind(this);
    this.getSnapshot = this.getSnapshot.bind(this);
    this.getListItems = this.getListItems.bind(this);
  }

  addTodo(todoValue) {
    this.state.list.addItem(todoValue);
    this.setState(this.state); //performs optimal redraw if something changed
  }

  deleteTodo(id) {
    this.state.list.deleteItemById(id);

    this.setState(this.state);
  }

  doKey(e) {
    if (e.keyCode === 13) {
      this.addTodo(e.target.value);
      e.target.value = '';
    }
  }

  //a small test to verify the imported primaryList is working as a singleton
  testListProvider() {
    console.log('LIST FROM LIST PROVIDER ', primaryList);
  }

  doSnapshot() {
    this.state.itemsSnapshot = this.state.list.getItems().slice(); //clone
    this.setState(this.state);
  }

  getSnapshot() {
    return this.state.itemsSnapshot;//static list is OK, it's a snapshot
  }

  getListItems() {
    return this.state.list.getItems();
  }

  render() {
    //following used for example of how ActionList acts like a reusable component,
    //but here it's not showing action buttons or handling actions
    const renderSnapshot = () => {
      if (this.state.itemsSnapshot) {
        return (
          <div className="snapshot">
            <ActionList getActionItems={this.getSnapshot} />
          </div>
        );
      }
    };
    return (
      <div>
        <div className="todoListBlock">
          <label htmlFor="todoInput">type item, hit return to add</label>
          &nbsp;
          <input id="todoInput" onKeyDown={this.doKey} type="text" />
          <ActionList
            getActionItems={this.getListItems}
            actionButtonHandler={this.deleteTodo}
            actionName="Delete"
          />
        </div>
        <div className="testBlock">
          <br />
          <br />
          <button onClick={this.testListProvider}>TEST</button>
          <button onClick={this.doSnapshot}>SNAPSHOT</button>
        </div>
        {renderSnapshot()}
      </div>
    );
  }
}

export default TodoPage;
