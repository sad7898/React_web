import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';
import MainTopic from './mainTopic.jsx';
import GeneralDiss from './generalDiscussion.jsx';
import {Route,Switch} from 'react-router-dom';
const ForumMain = (props) => {
    return(
        <>
        <div className="header-1">
            General Discussion
        </div>
        <ul className="header-2">
            <MainTopic to="/forum/GeneralDiss/post">General Discussion</MainTopic>
            <MainTopic to="/forum/BugReports/post">Bug Reports</MainTopic>
        </ul>
        </>        
    )
}
