import React, { useState, useEffect } from 'react';
import {Container,Form,FormControl,Button} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';

const SearchBar = (props) => {
    let stick = (props.stickTop ? "sticky-top" : "");
    return(
        
        <CSSTransition in={props.inProp} timeout={250} classNames="mobile-search" className="ms px-0 sticky-top" >
            
                <Container fluid className="px-0">
                        
                        <div className="d-flex flex-row align-items-center">
                            {props.children}
                            <Form inline action="/search">
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="search" className="mx-1">Search</Button>
                            </Form>
                        </div>
                </Container>
        </CSSTransition>
    )
}
export default SearchBar;