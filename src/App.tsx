import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalStyle />
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
