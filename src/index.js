import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Customizer from './pages/customizer';
import './styles/index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/customize",
    element: <Customizer />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} /> 
  </ThemeProvider>
);