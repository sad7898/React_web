import React, { Component } from 'react';
import Bar from './Nav.jsx';
import Main from "./MainIntro.jsx"

class Whole extends Component {
    componentDidMount(){
        let loadScreen = document.querySelector(".still-load");
        if(loadScreen){
        console.log("loadScreen ele is"+loadScreen);
        loadScreen.style.display = "none";}
    }
    render() { 
        return (  
            <div>
                <Bar/>
                <Main/>
            </div>
        );
    }
}
 
export default Whole;