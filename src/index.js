import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './jsx/app';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <App /> }/>
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);