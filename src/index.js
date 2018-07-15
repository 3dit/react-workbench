import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BaseApp from './BaseApp';

var list = [ {id:0, name:'make breakfast'}, { id:1, name:'make lunch'}];

var appData = { list: list };

function update() {
  ReactDOM.render(<BaseApp appData={appData} />, document.getElementById('root'));
} 

update();
