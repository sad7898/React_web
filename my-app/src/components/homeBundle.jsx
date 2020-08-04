import React, { Component } from 'react';
import Main from './mainIntro.jsx';
import Intro from './introText.jsx';
import './style/uniStyle.css';
class Home extends Component {
    
    render() { 
        return (  
            <div className="h-100">
                <Main/>
                <Intro head="Next generation RPG" textDirection="">          
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, numquam? Ipsam ratione corrupti asperiores repudiandae quisquam aliquam architecto delectus! Cumque error ex suscipit minus delectus tenetur at incidunt velit! Laudantium molestias, animi quis a cum repudiandae velit voluptate facere labore deserunt consequatur aliquid alias quaerat. Labore minus tenetur aut est.
                </Intro>
            </div>
        );
    }
}
 
export default Home;