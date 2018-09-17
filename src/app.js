//scss lib
import './assets/scss/app.scss';

//javascript lib
import 'bootstrap';
import './assets/js/button.js';

import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './store/reducer';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
