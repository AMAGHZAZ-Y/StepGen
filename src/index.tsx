import * as ReactDOM from 'react-dom/client';
import App from './app';
import React from 'react';
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container as Element);

root.render(<App />);