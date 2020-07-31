import React, { useState } from 'react';

const CreatePost = function(props){
    return (
        <form action="/posting" method="POST">
            <label for="name">Name</label>
            <input type="text" placeholder="Enter name" name="name"></input>
            <input type="radio" name="gender" value="male"></input>
            <label for="gender">Male</label>
            <input type="radio" name="gender" value="female"></input>
            <label for="gender">female</label>
            
            <button>Submit</button>
        </form>
    )
}
export default CreatePost;