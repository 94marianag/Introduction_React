import React from "react";


export default function HeardLinks(props){
   return <span className="header-links">
            {
                //Insertar código se utilizan las llaves
                props.user ? <a href="/#" onClick={props.logout}>Log Out</a> : 
                <span>
                <a href="/#" onClick={props.signin}>Sign In</a> | <a href="/#">Register</a>
                </span>
            }       
            </span> 
}