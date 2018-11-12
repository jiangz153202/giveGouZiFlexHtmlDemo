import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import App from './app';



let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <div>
           { JSON.stringify(store.getState().v)}
           <App></App>
        </div>
    </Provider>
    ,
    document.getElementById('root')
);

