/** @format */

// main.jsx

import '@fontsource/major-mono-display';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import React from 'react';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	rootElement
);
