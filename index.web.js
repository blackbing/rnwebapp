// index.web.js
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/index';


// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
});

console.log('init');
