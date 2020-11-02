import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from "./global.js"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
    <GlobalStyle/>
    </>
  );
}

export default App;
