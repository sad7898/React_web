import React, { Component } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
class AnimatedRow extends Component {
    constructor(props){
        super(props);
        this.state= {
            inProp: false
        }
    }
    componentDidMount(){
        this.setState({inProp:true});
    }
    render() { 
        const inProp = this.state.inProp;
        return (
            <CSSTransition in={inProp} timeout={500}>
                {this.props.children}
            </CSSTransition>
          );
    }
}
 
export default AnimatedRow;