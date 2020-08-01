import React, { Component } from 'react';
import Bar from './nav.jsx';
import Home from './homeBundle.jsx'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Forum from './forumComponents/forumBundle.jsx';

// class Whole extends Component {
//     componentDidMount(){
//         var loadScreen = document.querySelector(".still-load");
//         if(loadScreen){
//         console.log("loadScreen ele isss"+loadScreen);
//         setTimeout(() => (loadScreen.parentNode.removeChild(loadScreen)),2000);
        
//     }
    
//     }
//     render() { 
//         console.log(GeneralDiss);
//         return (  
//             <BrowserRouter>
//                 <Bar/>
//                 <Switch>
//                     <Route path="/forum/general" component={GeneralDiss}/>
//                     <Route path="/forum">
//                         <Forum/>
//                     </Route>
//                     <Route exact={true} path="/">
//                         <Home></Home>
//                     </Route>
                    
//                 </Switch>
               
//             </BrowserRouter>
            
//         );
//     }
// }

const Whole = function(props){
    return (
        <BrowserRouter>
                <Bar/>
               <Switch>
                     <Route path="/forum">
                         <Forum/>
                     </Route>
                     <Route exact={true} path="/">
                         <Home></Home>
                     </Route>
                    
                 </Switch>
               
      </BrowserRouter>
    )
}
 
export default Whole;