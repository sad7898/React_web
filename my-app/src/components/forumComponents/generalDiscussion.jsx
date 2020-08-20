import React, { Component, useEffect,useState} from 'react';
import {Container,Row,Column,Button} from 'react-bootstrap'
import {Link,Switch,Route,useParams,useRouteMatch} from 'react-router-dom'
import PostLink from './postLink.jsx'
import PostForm from './postForm.jsx';
import axios from 'axios';
const GeneralDiss = function(props){
    const [list,setList] = useState();
    useEffect(function(){
        axios.get("/api/post")
        .then((res) => (res.data))
        .then(data => (setList(data.map((val) => (<li key={val.id}><PostLink topic={val.topic} id={val.id} by={val.author} userId={val.userId}></PostLink></li>)))))
        .catch((err) => (console.log(err)))
    },[])
    let {postID,postTopic} =  useParams();
    let {path,url} = useRouteMatch();
    return (
        <>
                 <div className="header-1 d-flex flex-row justify-content-between">
                     <span>
                         <Link to={path}>General Discussion</Link>
                    </span>
                    <span>
                        <Button variant="outline-warning"><Link to={`${path}/new`}>+</Link></Button>
                    </span>
                 </div>
                 <Switch>
                    <Route exact path={path}>
                        
                        <ul id="postList">
                            <Container fluid>
                                {list}
                            </Container>
                        </ul>
                        
                    </Route>
                    <Route path={path+"/new"}>
                        <PostForm></PostForm>
                    </Route>
                </Switch>
        </>
    )
}
 
export default GeneralDiss;