import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Index(props) {
    return (
        <div className="anchor-position">
            <Link to={"/" + props.link}><i className={props.icon}></i><span>{props.name}</span></Link>
        </div>
    )
}

export default Index