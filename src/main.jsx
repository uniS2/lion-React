import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

// ReactDOMRoot { render, unmount }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Virtual DOM (React Element Tree : React Created) */}
  </React.StrictMode>
);

// rendering → mount (DOM)