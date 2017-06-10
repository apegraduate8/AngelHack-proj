import React from 'react';
import { Router, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './State/Reducers';
import App from './App';


const store = applyMiddleware()(createStore)

export default (
  <Provider store={store(reducers)}>
    <BrowserRouter>
        <div className="Container">
              <Route exact path='/' component={ App } />

        </div>
    </BrowserRouter>
  </Provider>

  )
