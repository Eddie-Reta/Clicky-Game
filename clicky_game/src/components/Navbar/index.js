import React from "react";
import "./style.css";
const Navbar = (props) => {
    return (
    <div className="container">
        <ul>
            <li>
              <p className="home" onClick={props.refresh}><strong>Clicky Game</strong></p>
            </li>
            <li>
                <p>{props.alert}</p>
            </li>
            <li>
                <p>Score: {props.score} | Top Score: {props.topScore}</p>
            </li>
        </ul>
    </div>
    );
}

export default Navbar;