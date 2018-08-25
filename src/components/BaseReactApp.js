import React from 'react';

import Header from './Header';
import ActionButtons from './ActionButtons';
import Message from './Message';

class BaseReactApp extends React.Component {    
    // Component State
    state = {
        buttonClickCount: 0
    };

    // Class functions
    handleAddClick = () => {
        this.setState((prevState) => ({ buttonClickCount: parseInt(prevState.buttonClickCount) + 1 }));
    };
    handleResetClick = () => {
        this.setState((prevState) => ({ buttonClickCount: 0 }));
    };

    // Lifecycle methods - only on class-based components
    componentDidMount() {
        try {
            const buttonClickCount = localStorage.getItem('buttonClickCount');
            //const options = JSON.parse(json);
    
            if (buttonClickCount) {
                this.setState(() => ({ buttonClickCount }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.buttonClickCount !== this.state.buttonClickCount) {
            //const json = JSON.stringify(this.state.buttonClickCount);
            localStorage.setItem('buttonClickCount',this.state.buttonClickCount);
            console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = 'Use this subtitle variable to pass a subtitle to the Header component.';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <ActionButtons 
                        buttonClickCount={this.state.buttonClickCount}
                        handleAddClick={this.handleAddClick} 
                        handleResetClick={this.handleResetClick} />
                    <Message buttonClickCount={this.state.buttonClickCount} />
                </div>
            </div>
        );
    }
}

export default BaseReactApp;