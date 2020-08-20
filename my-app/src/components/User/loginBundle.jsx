import React, { useState, useEffect } from 'react';
import {Container,Form,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import {setCurrentUser} from '../../store/actions/userActions.js';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
const Login = (props) => {
    let [user,setUser] = useState('');
    let [password,setPassword] = useState('');
    let [error,setError] = useState();
    let history = useHistory();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    const onChangeUser = (e) => {
        setUser(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = () => {
        const username = user;
        const pw = password;
        axios.post("/user/login",{user:username,password:pw})
        .then((res) => {
            console.log("it works");
            setError("");
            dispatch(setCurrentUser(username))
            history.push('/');
            
        })
        .catch((err) => {
            console.log(err.response.data)
            let errorObj = err.response.data;
            setError(errorObj[Object.keys(errorObj)[0]]); 
        });
    }
    return(
        <Container className="postForm-wrap py-3 px-3 loginForm">
            <div className="pb-2"><h1>Sign In</h1></div>
            <Form>
                <Form.Group controlId="username">
                    <Form.Control type="text" placeholder="Username or Email" name="user" value={user} onChange={onChangeUser} required/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChangePassword} required/>
                </Form.Group>
                <div style={{color:"red"}}>{error}</div>
                <Button variant="warning" id="playButton" type="button" onClick={handleLogin}>Submit</Button>
            </Form>
        </Container>
    )
}
export default Login;