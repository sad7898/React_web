import React, { useState, useEffect } from 'react';
import {Badge, ButtonGroup,Button} from 'react-bootstrap'
const Trending = (props) => {
    let [timeRange,setTimeRange] = useState("24");
    return (
        <>
        <div className="d-flex flex-row justify-content-start w-100 trendTable">
            <h1>Trending</h1>
            <ButtonGroup className="ml-2" size="sm">
                <Button variant="secondary">24 hours</Button>
                <Button variant="secondary">7 day</Button>
                <Button variant="secondary">1 month</Button>
            </ButtonGroup>
        </div>
        
        </>
    )
}
export default Trending;