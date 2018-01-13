import React, { Component } from 'react';

class ValidationComponent extends Component {
    render (props) {
        if (this.props.wordLength < 5) {

        return (
        <div>
            <p> Text is too short : {this.props.wordLength} chars! </p>
        </div>
        );
    }
    return (
<div>
    <p>Text long enough! </p>
</div>    
    )    
    }
}

export default ValidationComponent;