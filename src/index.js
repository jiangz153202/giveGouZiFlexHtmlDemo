import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import App from './app';
import Palette from './components/Palette/Palette';



let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <div>
           <App></App>
           <Palette></Palette>
        </div>
    </Provider>
    ,
    document.getElementById('root')
);

