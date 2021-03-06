import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import './index.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

const update = () => {
  localStorage.setItem('todoApp-redux', JSON.stringify(store.getState()));
};

store.subscribe(update);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
