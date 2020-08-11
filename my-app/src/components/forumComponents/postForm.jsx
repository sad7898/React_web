import React, { useState, useEffect,useRef } from 'react';
import {InputGroup,FormControl,Form,Button} from 'react-bootstrap';
const PostForm = (props) => {
    let [textCount,setTextCount] = useState(0);
    let [topicCount,setTopicCount] = useState(0);
    let textRef = useRef(null);
    let topicRef= useRef(null);
    const handleChange = (event) => {
        if (event.target.name==="postTopic") setTopicCount(event.target.value.length);
        else if (event.target.name==="postText") setTextCount(event.target.value.length);
    }
    
    return (
        <div className="postForm-wrap mx-1 px-3 my-3 py-3 mt-4">
            <Form action="/post" method="POST">
                <Form.Group controlId="formTopic">
                    <div style={{float: "right"}}>{topicCount}/300</div>
                    <Form.Control type="text" placeholder="Topic" name="postTopic" onChange={handleChange}/>
                    <Form.Text className="text-muted">
                        Topic must not contain special character excluding "!,'',""
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formText">
                    <div style={{float: "right"}}>{textCount}/300</div>
                    <Form.Control as="textarea" rows="3" placeholder="Text" name="postText" onChange={handleChange}></Form.Control>
                </Form.Group>
                <Button variant="warning" id="playButton" type="submit">Post</Button>
            </Form>
            
         </div>
    )
}
export default PostForm;