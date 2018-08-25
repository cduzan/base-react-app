import React from 'react';

const Message = (props) => (
    <div className='message'>
        <p className='message__text'>The button has been clicked {props.buttonClickCount} times.</p>
    </div>
);

export default Message;