import React from 'react';

const ActionButtons = (props) => (
    <div className='action-buttons-container'>
        <button 
            className='button action-buttons-container__button'
            onClick={props.handleAddClick}
        >
            Add
        </button>
        <button 
            className='button action-buttons-container__button'
            onClick={props.handleResetClick}
            disabled={props.buttonClickCount < 1}
        >
            Reset
        </button>
    </div>
);

export default ActionButtons;