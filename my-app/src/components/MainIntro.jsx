import React, { Component } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';

class Main extends Component {
    render() { 
        return (  
            <Container fluid className="main d-flex flex-column justify-content-between">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className="mb-">
                                <h1>VIRTUAL LIFE</h1>
                                <h3>New beginning</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
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


