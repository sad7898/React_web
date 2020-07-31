import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MainTopic extends Component {
    constructor(props){
        super(props);
        this.to = props.to;
    }
    
    render() { 
        console.log(this.props)
        // let childList = this.props.children.map((item) => (<li key={caesarFive(item.props.children[0].props.children)}>{item}</li>));
        return (
           <li key={caesarFive(this.props.children)}>
               <Link to={this.to}>{this.props.children}</Link>
           </li>
          );
    }
}
 
export default MainTopic;

export function caesarFive(str){
    let lowerCased = (str).toLowerCase().replace(" ","");
    lowerCased = lowerCased.split("").map((val) => (String.fromCharCode(val.charCodeAt(0)+5)));
    console.log(lowerCased.join(""));
    return lowerCased.join("");
}