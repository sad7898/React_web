import React, { useState, useEffect } from 'react';
import {Switch,Route,Link,useHistory} from 'react-router-dom';
import {Form,Button,Container} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import axios from 'axios';
const SignUp = (props) => {
    let [user,setUser] = useState('');
    let [password,setPassword] = useState('');
    let [email,setEmail] = useState('');
    let [error,setError] = useState();
    let history = useHistory();
    let auth = useSelector(state => state.auth)
    const onChangeUser = (e) => {
        setUser(e.target.value);
    }
    
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleClick = () => {
        const User = user;
        const Password = password;
        const Email = email;
        axios.post("/user/signup", {user:User,password:Password,email:Email})
        .then((res) => {
            history.push("/user/signin")
            console.log(res);
        })
        .catch((err) => {
            console.log(err.response)
            let errObj = err.response.data;
            setError(errObj[Object.keys(errObj)[0]]);
        })

    }
    return (
       <Container className="postForm-wrap loginForm py-3 px-3">
           <div className="pb-2"><h1>Sign Up</h1></div>
           <Form>
                <Form.Group controlId="username">
                    <Form.Control type="text" placeholder="Username" name="user" value={user} onChange={onChangeUser} required/>
                    <Form.Text className="text-muted">
                        Username must contain atleast 8 characters and not contain special character.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChangePassword} required/>
                    <Form.Text className="text-muted">
                        Password must not contain special character and is atleast 8 characters with atleast one number
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="exmaple@domain.com" name="email" value={email} onChange={onChangeEmail} required/>
                </Form.Group>
                <div style={{color:"red"}}>{error}</div>
                <Button variant="warning" id="playButton" type="button" onClick={handleClick}>Submit</Button>
            </Form>
       </Container>
    )
}
export default SignUp;