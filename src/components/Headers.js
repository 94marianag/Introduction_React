import React from "react"
import HeaderLinks from "./HeaderLinks";
export default function Header(props) {
    // throw new Error("User not found my dear");
    return <header className="app-header">
        <h1>
        Test Application header
        </h1>
        <HeaderLinks user={props.user} logout={props.logout} signin={props.signin}/>
    </header>;
}