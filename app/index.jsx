import './stylus/style.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let appNode = document.createElement('div');
document.body.appendChild(appNode);

ReactDOM.render(<App />, appNode);
