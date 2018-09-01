import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppRoot from './AppRoot';


ReactDOM.render(<AppRoot />, document.getElementById('root'));

console.log('module', module);


module.hot.accept();