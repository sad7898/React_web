import React, { Component } from 'react';
import Bar from './nav.jsx';
import Home from './homeBundle.jsx'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Forum from './forumComponents/forumBundle.jsx';
import './style/uniStyle.scss';
import $ from 'jquery';

const Whole = function(props){
    
    return (
        <BrowserRouter>
                <Bar/>
               <Switch>
                     <Route path="/forum">
                         <Forum/>
                     </Route>
                     <Route exact={true} path="/">
                         <Home></Home>
                     </Route> 
                 </Switch>
      </BrowserRouter>
    )
}
 
export default Whole;