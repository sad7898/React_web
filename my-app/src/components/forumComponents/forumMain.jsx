import React, { useState, useEffect,useRef } from 'react';
import SearchBar from './mobileSearchBar.jsx';
import SearchIcon  from '../style/SearchIcon.png';
import {Container,Col,Row,Form,FormControl,Button,Breadcrumb} from 'react-bootstrap';
import {useRouteMatch,Link} from 'react-router-dom';
import Close from '../style/closeButton.png';
const ForumMain = (props) => {
    let {parentURL,path} = useRouteMatch();
    let [searchDisplay,setSearchDisplay] = useState(false);
    let [searchStickTop,setSearchStickTop] = useState(false);
    var sdUpdated;
    const mainRef = useRef(null);
    // useEffect(() => {
    //     let root =document.getElementById('root');
    //     root.addEventListener('scroll',handleScrollForum);
    //     console.log("useeff works");
    //     return () => {
    //         document.getElementById('root').removeEventListener('scroll',handleScrollForum);
    //     }
    // },[])
    useEffect(() => {
        console.log(`SD: ${searchDisplay}`);
        console.log(`SF: ${searchStickTop}`);
    })
    useEffect(() => {
      sdUpdated = searchDisplay;
      console.log("updated sd:" + sdUpdated);
    },[searchDisplay])

    const handleClickSearch = () => {
        setSearchDisplay(prevState => (prevState===false ? true : false));
    }
    const displayData = () => {
        console.log(searchDisplay);
        console.log(mainRef);
    }
    const handleScrollForum = () => {
        console.log(sdUpdated);
        let currentScroll= document.getElementById("root").scrollTop;

        if (currentScroll > (mainRef.current.scrollHeight-56)) {setSearchStickTop(true);}
        else setSearchStickTop(false);
        console.log(currentScroll);
    }
        
    return(
        <>
    <Container fluid className="forumHead d-flex flex-row align-items-end px-0" id="smaller-main" ref={mainRef}>
    <div className="w-100" style={{backgroundColor: "rgba(133,99,71,0.5)"}}>
        <Container className="d-flex flex-row justify-content-between align-items-center py-1">
                 <div className="d-flex flex-row align-items-center">
                     <h1 className="forumHeader" style={{color: "#c9522c"}}>Forums</h1>
                     <span className="pl-2"><img className="searchIcon" onClick={handleClickSearch} src={SearchIcon}></img></span>
                 </div>
                 <Breadcrumb className="forumNav">
                         <Breadcrumb.Item linkAs="span"><Link to={path}>Index</Link></Breadcrumb.Item>
                         <Breadcrumb.Item linkAs="span"><Link to={path+"/GeneralDiss/post"}>Discussion</Link></Breadcrumb.Item>
                         <Breadcrumb.Item linkAs="span"><Link to={path+"/GeneralDiss/post"}>Bug Reports</Link></Breadcrumb.Item>
                 </Breadcrumb>
             <Form inline className="search-bar" action="/search" method="GET">
                 <FormControl type="text" placeholder="Search anything" className="mr-sm-2" name="q" />
                 <Button variant="search" type="submit">Search</Button>
             </Form>
         </Container>
     </div>
 </Container>

 <SearchBar inProp={searchDisplay} stickTop={searchStickTop}><img id="closeButton" src={Close} onClick={handleClickSearch} className="pl-1 pr-3"></img></SearchBar>
 </> )
}
export default ForumMain;