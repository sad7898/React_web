import React, { Component } from 'react';
import Logo from "./style/logoSample.png"

class Brand extends Component {
    constructor(props){
        super(props);
        this.state = {
            brandName: props.brand,
        }
        
    }
    componentDidMount(){
        if (!this.state.brandName) this.setState({brandName : ""})
    }
    render() { 
        return (
                    <div className="logo mr-4">
                        <img src={Logo} className="img-fluid img-logo pl-3"></img>
                    </div>
                
            );
    }
}
 
export default Brand;