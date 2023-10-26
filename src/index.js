import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppPage from './jsx/app';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <AppPage /> }/>
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppPage />
  </BrowserRouter>
);