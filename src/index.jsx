import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'


//REDUX AND REACT-REDUX
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'

//MEDDLEWARE
import multi from 'redux-multi'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers,devtools)

ReactDOM.render(    
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))
