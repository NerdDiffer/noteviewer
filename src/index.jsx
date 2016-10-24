import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import store from './store';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

const provider = (
  <Provider store={store}>
    <App />
  </Provider>
):

ReactDOM.render(
  provider,
  document.querySelector('.mount')
);
