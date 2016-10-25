import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import App from './components/App';

const store = createStore(
  reducers,
  composeWithDevTools()
);

const provider = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  provider,
  document.querySelector('.mount')
);
