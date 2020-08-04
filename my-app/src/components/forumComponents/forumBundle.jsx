import React, { Component } from 'react';
import {Container,Col,Row,Form,FormControl,Button,Breadcrumb} from 'react-bootstrap';
import MainTopic from './mainTopic.jsx'
import {Link, useRouteMatch,Switch,Route,useParams} from 'react-router-dom';
import GeneralDiss from './generalDiscussion.jsx';
import AnimatedRow from '../animatedMain.jsx';
import {ReactComponent as SearchIcon}  from '../style/SearchIcon.svg';
const Forum = function(props){
        let {parentURL, path} = useRouteMatch();
        
        return (
            <>
           <Container fluid className="forumHead d-flex flex-row align-items-end px-0" id="smaller-main">
               <div className="w-100" style={{backgroundColor: "rgba(133,99,71,0.5)"}}>
                   <Container className="d-flex flex-row justify-content-between align-items-center py-1">
                            <div className="d-flex flex-row align-items-center">
                                <h1 style={{color: "#FBEEC1"}}>Forums</h1>
                                <span className="pl-2"><button>search</button></span>
                            </div>
                            <Breadcrumb className="forumNav">
                                    <Breadcrumb.Item linkAs="span"><Link to={path}>Index</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item linkAs="span"><Link to={path+"/GeneralDiss/post"}>Discussion</Link></Breadcrumb.Item>
                            </Breadcrumb>
                        <Form inline className="search-bar">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="search">Search</Button>
                        </Form>
                    </Container>
                </div>
            </Container>
            <Container fluid className="px-0">
                <div className="hidden-search">
                    <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="search">Search</Button>
                    </Form>
                </div>
            </Container>
            <Container className="forumWrapper h-100">
                <Switch>
                    <Route exact path={path}>
                        <Row>
                            <Col xl={8}>
                                
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