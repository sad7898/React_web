import React, { useState, useEffect } from 'react';
import {Link,Route,useRouteMatch} from 'react-router-dom';
import {v4 as uuidv4,v5 as uuidv5} from 'uuid';

// class Post extends Component {
//    constructor(props){
//        super(props);
//        this.state = {
//            topic : props.topic,
//            poster : props.poster,
//            comment: props.comment,
//            tag: props.tag
//        }
//        this.id = uuidv5(this.state.topic,uuidv4());
//    }
//     render() { 
//         const topic = this.state.topic;
//         let postKey = topic
//         return (
//            <li key={this.id}><Link to={"/forum/general/"+this.id}>{topic}</Link></li>
//           );
//     }
// }
const PostLink = (props) => {
    let {path,url} = useRouteMatch();
    const [topic,setTopic] = useState(props.topic);
    const [poster,setPoster] = useState(props.poster);
    const [tag,setTag] =  useState(null);
    const [id,setID] = useState(props.id);
    return (  
                <Link to={path+"/"+topic+"/"+id}>{topic}</Link>
    );
}
 
export default PostLink;