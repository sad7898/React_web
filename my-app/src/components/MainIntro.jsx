import React, { Component } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
import AnimatedRow from './AnimatedMain.jsx';
import './style/homeStyle.css';
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            mainIn : false
        }
    }
    componentDidMount(){
        this.setState({mainIn: true});
    }
    render() { 
        const inProp = this.state.mainIn;
        return (  
            <Container fluid className="main d-flex flex-column justify-content-between">
                <CSSTransition in={inProp} className="boi" timeout={500}>
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
                <Container>
                    <Row>
                        <Col xl={12}>
                                <Button variant="warning" id="playButton">Play Now</Button>
                        </Col>
                    </Row>
                </Container>
                
            </Container>

        );
    }
}
 
export default Main;


