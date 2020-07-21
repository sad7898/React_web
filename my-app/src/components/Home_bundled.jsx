import React, { Component } from 'react';
import Bar from './Nav.jsx';
import Main from "./MainIntro.jsx"
import Intro from './IntroText.jsx'

class Whole extends Component {
    componentDidMount(){
        var loadScreen = document.querySelector(".still-load");
        if(loadScreen){
        console.log("loadScreen ele isss"+loadScreen);
        setTimeout(() => (loadScreen.parentNode.removeChild(loadScreen)),2000);
    }
    }
    render() { 
        return (  
            <div>
                <Bar/>
                <Main/>
                <Intro head="Next generation RPG" textDirection="">
                    
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, numquam? Ipsam ratione corrupti asperiores repudiandae quisquam aliquam architecto delectus! Cumque error ex suscipit minus delectus tenetur at incidunt velit! Laudantium molestias, animi quis a cum repudiandae velit voluptate facere labore deserunt consequatur aliquid alias quaerat. Labore minus tenetur aut est.
                </Intro>
               
            </div>
        );
    }
}
 
export default Whole;