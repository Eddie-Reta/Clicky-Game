import React from "react";
import "./style.css";

const Title = (props) => {
    return (
    <div className="containerTitle">
   {props.children}
    </div>
    )
};
export default Title;