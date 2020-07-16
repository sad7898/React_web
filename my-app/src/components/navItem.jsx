import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class NavItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : props.name,
            href : props.href
            
        }
    }
    
    render() { 
        return ( <li className="nav-item">
        <a className="nav-link" href={this.state.href}>{this.state.name}</a>
         </li> );
    }
}
 
export default NavItem;