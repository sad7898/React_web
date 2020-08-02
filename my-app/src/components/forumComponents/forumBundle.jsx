import React, { Component } from 'react';
import {Container,Col,Row,Form,FormControl,Button} from 'react-bootstrap';
import MainTopic from './mainTopic.jsx'
import {Link, useRouteMatch,Switch,Route,useParams} from 'react-router-dom';
import GeneralDiss from './generalDiscussion.jsx';
import AnimatedRow from '../animatedMain.jsx';
const Forum = function(props){
        let {parentURL, path} = useRouteMatch();
        
        return (
            <>
           <Container fluid className="forumHead d-flex flex-row align-items-end px-0" id="smaller-main">
               <div className="w-100" style={{backgroundColor: "rgba(133,99,71,0.5)"}}>
                   <Container className="d-flex flex-row justify-content-between align-items-center py-1">
                            <div>
                                <h1>Forums</h1>
                            </div>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        
                    </Container>
                </div>
            </Container>
            <Container className="forumWrapper h-100">
                <Switch>
                    <Route exact path={path}>
                        {/* <div className="header-1">
                            Forum
                        </div>
                        <ul className="header-2">
                            <MainTopic to="/forum/GeneralDiss/post">General Discussion</MainTopic>
                            <MainTopic to="/forum/BugReports/post">Bug Reports</MainTopic>
                        </ul> */}
                        <Row>
                            <Col xl={8}>
                                <h1>General Discussion</h1>
                            </Col>
                        </Row>
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