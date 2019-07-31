import React from "react";
import "./style.css";



const ShinobiGame = (props) => {  
    
    return (
        
        <div className="card" onClick={props.handleAddScore}>
            <div className="img-container">
                <img alt={props.name} src={props.gif} id={props.id} />
            </div>
        </div>
        
        
    )
}

export default ShinobiGame;