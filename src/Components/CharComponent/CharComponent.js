import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div 
        onClick={props.click}
        className="letter-box">
            <p>{props.letter}</p>
        </div>    
    );
}

export default CharComponent;