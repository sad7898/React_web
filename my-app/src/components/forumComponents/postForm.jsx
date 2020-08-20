import React, { useState, useEffect,useRef } from 'react';
import {InputGroup,FormControl,Form,Button} from 'react-bootstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
const PostForm = (props) => {
    let [text,setText] = useState('');
    let [topic,setTopic] = useState('');
    let textRef = useRef(null);
    let topicRef= useRef(null);
    let history = useHistory();
    const handleChangeTopic = (event) => {
        setTopic(event.target.value);
       
    }
    const handleChangeText = (event) => {
       setText(event.target.value);
    }
    
    return (
        <div className="postForm-wrap mx-1 px-3 my-3 py-3 mt-4">
            <Form action="/post" method="POST">
                <Form.Group controlId="formTopic">
                    <div style={{float: "right"}}>{topic.length}/300</div>
                    <Form.Control type="text" placeholder="Topic" name="postTopic" value={topic} onChange={handleChangeTopic} maxLength="50"/>
                    <Form.Text className="text-muted">
                        Topic must not contain special character excluding "!,'',""
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formText">
                    <div style={{float: "right"}}>{text.length}/300</div>
                    <Form.Control as="textarea" rows="3" placeholder="Text" name="postText" value={text} onChange={handleChangeText} maxLength="300"></Form.Control>
                </Form.Group>
                <Button variant="warning" id="playButton" type="submit">Post</Button>
            </Form>
            
         </div>
    )
}
export default PostForm;