import React, { useState, useEffect } from 'react';
import {Link,Route,useRouteMatch} from 'react-router-dom';
import {v4 as uuidv4,v5 as uuidv5} from 'uuid';
import {Container,Row,Col} from 'react-bootstrap';


const PostLink = (props) => {
    let {path,url} = useRouteMatch();
    const [topic,setTopic] = useState(props.topic);
    const [poster,setPoster] = useState(props.by);
    const [tag,setTag] =  useState(null);
    const [id,setID] = useState(props.id);
    const [userId,setUserId] = useState(props.userId);
    useEffect(()=>{
        console.log(topic);
    },[])
    return ( 
            <Row className="">
                <Col>
                    <Link to={path+"/"+id+"/"+topic}>{topic}</Link>
                </Col>
                <Col className="d-flex flex-row justify-content-end">
                    by <Link to={`/user/${userId}`}>{poster}</Link>
                </Col>
            </Row>
        
    );
}
 
export default PostLink;