import React, { Component } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import './style/homeStyle.css';
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
            // <CSSTransition in={inProp} className="boi-" timeout={500}>
            //         <Container>
            //             <Row>
            //                 <Col xl={12}>
            //                     <div className="mb-">
            //                         <h1>VIRTUAL LIFE</h1>
            //                         <hr id="test"></hr>
            //                         <h3>New beginning</h3>
            //                     </div>
            //                 </Col>
            //             </Row>
            //         </Container>
            // </CSSTransition>
            <CSSTransition in={inProp} timeout={500}>
                    <span>
                        <Container>
                            <Row>
                                <Col xl={12} id="mainText">
                                    <div>
                                        <h1>VIRTUAL LIFE</h1>
                                        <hr></hr>
                                        <h3>New beginning</h3>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </span>
                </CSSTransition>
          );
    }
}
 
export default AnimatedRow;