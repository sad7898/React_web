import React, { useState, useEffect } from 'react';
import Bar from './Nav.jsx';
import Home from './homeBundle.jsx'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Forum from './forumComponents/forumBundle.jsx';
import './style/uniStyle.css';
import $ from 'jquery';
import SignUp from './User/regisBundle.jsx';
import Login from './User/loginBundle.jsx';
import {useSelector,useDispatch} from 'react-redux';
import {setCurrentUser} from '../store/actions/userActions.js';
import axios from 'axios';
import { authReducer } from '../store/reducers/authReducer.js';



const Whole = function(props){
     const counter = useSelector(state => state.logOut);
     const dispatch = useDispatch()
     let auth = useSelector(state => state.auth);
     useEffect(() => {
          axios.get('/user/verifyJwt')
          .then((res) => {
               console.log(res);
               dispatch(setCurrentUser(res.data.user))
          })
          .catch((err) => (console.log(err)))
          
     },[])
    return (
   
               <BrowserRouter>
                         <Bar/>
                         <Switch>
                              <Route path="/user/signin">
                                   { auth.isAuthorized ?  <Redirect to="/"/> : <Login></Login> }
                              </Route>
                              <Route path="/user/signup">
                                   { auth.isAuthorized ?  <Redirect to="/"/> : <SignUp/> }
                              </Route>
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