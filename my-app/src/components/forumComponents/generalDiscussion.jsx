import React, { Component, useEffect,useState} from 'react';
import {Container,Row,Column,Button} from 'react-bootstrap'
import {Link,Switch,Route,useParams,useRouteMatch} from 'react-router-dom'
import PostLink from './postLink.jsx'
import PostForm from './postForm.jsx';
const GeneralDiss = function(props){
    const [list,setList] = useState();
    useEffect(function(){
        fetch("/api/post")
        .then((obj) => (obj.json()))
        .then((data) => (setList(data.map((val) => (<li key={val.id}><PostLink topic={val.topic} id={val.id}>{val.topic}</PostLink></li>)))))
        .catch((err) => (console.log(err)));
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
                        create post
                    </span>
                 </div>
                 <Switch>
                    <Route exact path={path}>
                        <ul id="postList">
                            {list}
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