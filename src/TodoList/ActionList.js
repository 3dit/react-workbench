import React, { Component } from 'react';

export default class ActionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    let actionItems = props.actionItems || [];

    if (props.getActionItems) {
      this.getActionItems = props.getActionItems;
    } else {
      this.getActionItems = () => { return actionItems; };
    }

    this.actionButtonHandler = props.actionButtonHandler || null;
    this.actionName = props.actionName || '';

    this.action = this.action.bind(this);
  }

  action(id) {
    this.actionButtonHandler(id);
  }

  render() {
    const optionalActionButton = (item) => {
      if (this.actionButtonHandler !== null) {
        return (
          <button value={item.id} onClick={() => this.action(item.id)}>
            {this.actionName}
          </button>
        );
      }
    };

    let items = this.getActionItems();
    console.log(this,items);

    const itemsNode = items.map(item => {
      return (
        <li key={item.uid} className="actionItem">
          {item.name}
          {optionalActionButton(item)}
        </li>
      );
    });

    return <ul className="actionList">{itemsNode}</ul>;
  }
}


