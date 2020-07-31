import React, { Component } from 'react';
import {Container,Column,Row} from 'react-bootstrap';
import MainTopic from './mainTopic.jsx'
import {Link, useRouteMatch,Switch,Route,useParams} from 'react-router-dom';
import GeneralDiss from './generalDiss.jsx';
const Forum = function(props){
        let {parentURL, path} = useRouteMatch();
        
        return (
            <Container className="forumWrapper">
                <Switch>
                    <Route exact path={path}>
                        <div className="header-1">VLIFE Forum</div>
                        <ul className="header-2">
                            <MainTopic to="/forum/GeneralDiss/post">General Discussion</MainTopic>
                            <MainTopic to="/forum/BugReports/post">Bug Reports</MainTopic>
                        </ul>
                    </Route>
                    <Route path={path+"/GeneralDiss/post"}>
                        <GeneralDiss/>
                    </Route>
                </Switch>
                    
            </Container>
            
          );
    
}
 
export default Forum;