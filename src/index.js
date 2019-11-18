import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import App from './App';
import Green from './Green';
import Report from './Report';


//import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/home" component={App}/>
    <Route path="/post" component={Post}/>
    <Route path="/green" component={Green}/>
    <Route path="/report" component={Report}/>
   

    </Router>,document.getElementById('root')
);