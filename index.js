import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Aquí puedes personalizar tu tema si quieres
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
