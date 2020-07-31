import React, { Component, useEffect,useState} from 'react';
import {Container,Row,Column,Button} from 'react-bootstrap'
import {Link,Switch,Route,useParams,useRouteMatch} from 'react-router-dom'
import PostLink from './postLink.jsx'

// class GeneralDiss extends Component {
//     constructor(props){
//         super(props);
    
//     }
//     render() { 
       
       
//         return (
//             <Container className="forumWrapper">
//                 <div className="header-1 d-flex flex-row justify-content-between">
//                     <span>General Discussion</span>
//                     <Button variant="primary"><Link to="/forum/general/createPost">Create post</Link></Button>
//                 </div>
//                 <ul>
//                     <PostLink topic="Hey"/>
//                 </ul>
//             </Container>
            
//           );
//     }
// }

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
                     <span>General Discussion</span>
                     <Button variant="primary"><Link to={url+"/new"}>Create post</Link></Button>
                 </div>
                 <Switch>
                    <Route exact path={path}>
                        <ul id="postList">
                            {list}
                        </ul>
                    </Route>
                    <Route path={path+"/new"}>
                        <form action="/post" method="POST">
                            <label for="postTopic">Topic</label>
                            <input type="text" name="postTopic"></input>
                            <label for="postText">Text</label>
                            <input type="text" name="postText"></input>
                            <button>Submit</button>
                        </form>
                        
                    </Route>
                </Switch>
        </>
    )
}
 
export default GeneralDiss;