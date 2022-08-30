import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import themeVariables from "./theme";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';

const theme = extendTheme(themeVariables);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);