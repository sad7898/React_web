import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Whole from './components/whole.jsx'
import {Provider} from 'react-redux';
import store from './store/store.js';
ReactDOM.render(
    <Provider store={store}>
    <Whole/>
    </Provider>
    ,document.getElementById("root")
);