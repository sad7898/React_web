import React, { Component } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Image from './style/work.jpg'
class Intro extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgURL : props.imgURL,
            head : props.head,
            textDirection : props.textDirection
        }
    }
    render() { 
        const source = this.state.imgURL;
        const Head = this.state.head;
        let textDirection = this.state.textDirection;
        const imgDir = (textDirection==="right") ? "order-0" : "order-1";
        const textOn = (textDirection==="right") ? "order-1" : "order-0";
        return (  
            <Container className="h-100" id="#mainIntro">
                <Row className="px-2 pb-2 pt-5 d-flex flex-row intro">
                    <Col xl={4} className={imgDir+" d-flex flex-column justify-content-center"}>
                        <img src={Image} className="img-fluid"></img>
                    </Col>
                    <Col xl={8} className={textOn+" d-flex flex-column justify-content-start"}>
                        <span className="d-flex flex-column align-items-start">
                            <h1>{Head}</h1>
                            <p>{this.props.children}</p>
                        </span>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Intro;