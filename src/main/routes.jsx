import React from 'react'
import { Route, Redirect, Router, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <div className='container'>
        <Router history={hashHistory}>
            <Route path='/todo' component={Todo}/>
            <Route path='/about' component={About}/>
            <Redirect from='*' to='/todo'/>
        </Router>
    </div>
)