// Third-Party Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import BaseReactApp from './components/BaseReactApp';

// Style
import 'normalize.css/normalize.css';   // node module that sets all browsers to use a default styling
import './styles/styles.scss';

ReactDOM.render(<BaseReactApp/>, document.getElementById('app'));
