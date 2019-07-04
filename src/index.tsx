import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import index from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const stores = createStore(
    index,
);

ReactDOM.render(
    <Provider store={stores}>
        <Home />
    </Provider>, 
    document.getElementById('root')
);

