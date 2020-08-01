import React, { Component } from 'react';
import {Container,Column,Row} from 'react-bootstrap';
import MainTopic from '../mainTopic.jsx'
import {Link, useRouteMatch,Switch,Route,useParams} from 'react-router-dom';
import GeneralDiss from './generalDiscussion.jsx';
import AnimatedRow from '../animatedMain.jsx';

const Forum = function(props){
        let {parentURL, path} = useRouteMatch();
        
        return (
            <>
           <Container className="forumHead d-flex flex-row justify-content-between">
                    <AnimatedRow>
                        <div>
                            <h1>Forums</h1>
                        </div>
                    </AnimatedRow>
                    <div>
                        <p>Search</p>
                    </div>
            </Container>
            <Container className="forumWrapper">
                <Switch>
                    <Route exact path={path}>
                        <div className="header-1">
                            General Discussion
                        </div>
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
            </>
            
          );
    
}
 
export default Forum;