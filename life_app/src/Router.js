import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './State/Reducers';
import App from './App';
import Show from './Components/SlideShow/Show';


const store = applyMiddleware()(createStore)

export default (
  <Provider store={store(reducers)}>
    <BrowserRouter>
        <div className="Container">
              <Route exact path='/' component={ App } />
               <Route path="/slideShow/:name" component={ Show } />

        </div>
    </BrowserRouter>
  </Provider>

  )
