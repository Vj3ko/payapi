import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyles } from './Styles';
import { theme } from './Theme';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
