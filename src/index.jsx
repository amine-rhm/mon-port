import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // <- note bien le ./ ici

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Commenté temporairement pour éviter les erreurs React 19
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);