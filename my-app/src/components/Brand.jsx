import React, { Component } from 'react';
import Logo from "./style/logoSample.png"
import Nav from './nav.jsx'
import {Link} from 'react-router-dom';
class Brand extends Component {
    constructor(props){
        super(props);
        this.state = {
            brandName: props.brand,
            scrollTop: 0
        }
        this.divRef = React.createRef();
        this.scrollEvent = this.scrollEvent.bind(this);
    }
    scrollEvent(){
        console.log("hiihii")
        let currentScroll = this.divRef.current.scrollTop;
        this.setState({scrollTop: currentScroll});
        console.log(this.state.scrollTop);
        console.log(window);
    }
    // componentDidMount(){
    //     if (!this.state.brandName) this.setState({brandName : ""})
    //     console.log(this.divRef.current.style.height);
    //     console.log(window.scrollY);
    //     let testFunc = function(){
    //         console.log(this.state.scrollTop);
    //     }
    //     testFunc = testFunc.bind(this);
    //     testFunc();
        
    // }
    render() { 
        const divRef = this.divRef;
        return (
                    <div className="logo mr-4" ref={divRef}>
                        <Link to="/"><img src={Logo} className="img-fluid img-logo pl-3"></img></Link>
                    </div>
                
            );
    }
}
 
export default Brand;