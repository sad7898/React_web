import React, { useState, useEffect } from 'react';
import Bar from './Nav.jsx';
import Home from './homeBundle.jsx'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Forum from './forumComponents/forumBundle.jsx';
import './style/uniStyle.css';
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