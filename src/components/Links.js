import React from "react";

function Links(props){
    return (
        <div className = "links">
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>        
        <div><a href={props.linkedin}>{props.linkedin}</a></div>
        </div>
    )
}

export default Links;