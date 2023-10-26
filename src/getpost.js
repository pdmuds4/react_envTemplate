import React from "react";
import axios from "axios";

function Getpost(endpoint){
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get("http://0.0.0.0:3001" + endpoint)
        .then((response) => {
            setPost(response.data);
        })
        .catch((e)=>{
            setPost(null);
        });
    }, []);

    return post;
}

export default Getpost;