import React, { Component, useState,useEffect} from 'react';
import {Container,Col,Row,Form,FormControl,Button,Breadcrumb} from 'react-bootstrap';
import MainTopic from './mainTopic.jsx';
import {Link, useRouteMatch,Switch,Route,useParams} from 'react-router-dom';
import GeneralDiss from './generalDiscussion.jsx';
import AnimatedRow from '../animatedMain.jsx';
import ForumMain from './forumMain.jsx';
import Trending from './trendingTable.jsx'
const Forum = function(props){
    useEffect(() => {
            document.getElementById('root').style.backgroundColor = "#ccafaf";
            return () => {document.getElementById('root').style.backgroundColor ="#4d4545"}
        },[]);
        let {parentURL, path} = useRouteMatch();
        let {query} = useParams();
        
        return (
            <>
                <ForumMain/>
                <Container className="forumWrapper h-100">
                    <Switch>
                        <Route path={path+"/GeneralDiss/post"}>
                            <GeneralDiss/>
                        </Route>
                        <Route path={path+"/search"}>
                            <h1>hello</h1>
                        </Route>
                        <Route exact path={path}>
                            <Row style={{marginTop: "80px"}}>
                                
                                <Col md={9} className="d-flex flex-row justify-content-around">
                                    <Trending></Trending>
                                </Col>
                                
                            </Row>
                        </Route>
                    </Switch>
                </Container>
          
            </>
          );
    
}
 
export default Forum;