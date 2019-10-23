import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import Routes from './routes';
import rootReducer from './store/reducers';
import rootSaga from './store/sagas';


import './index.css';
import './assets/styles/global.scss';
import "./assets/fonts/Sans/sans-font.css";
import "./assets/fonts/Roboto/roboto-font.css";
import "./assets/fonts/Paralucent/paralucent-font.css";

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
