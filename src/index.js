import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

// what is that Acronym for Redux? RADS

// Actions

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}


// Reducer

const reducer = (state=0, action) => {
    switch(action.type) {
        case 'INCREMENT':
          return state+1;
        case 'DECREMENT':
          return state-1;
        default:
          return state;
    }
}

// create Store and loads reducer
// This is the heart of redux 
let store = createStore(reducer);

// dispatch actions




// Monitor
store.subscribe(() => console.log(store.getState()));

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
