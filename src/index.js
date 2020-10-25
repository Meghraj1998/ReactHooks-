import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 
import * as serviceWorker from './serviceWorker';
//const ThemeContext = React.createContext('light');

export const themes = {
  
  dark: {
    foreground: 'yellow',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext( themes.dark  );//default value


ReactDOM.render(
   
    <App  data={{name:'meghraj'}}/>
   
  ,document.getElementById('root')
);
 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
