import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypewriterComponent = ({text, speed}) => {
    return (
        <ReactTypingEffect 
            text={text} 
            speed={speed}
            eraseDelay={2000}/>
    )
};

export default TypewriterComponent;