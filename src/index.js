import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { WalletModalProvider } from './context/WalletModalContext';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
const getLibrary = (provider) => new Web3(provider);

ReactDOM.render(
  <React.StrictMode>
     <Web3ReactProvider getLibrary={getLibrary}>
        <WalletModalProvider>
          <BrowserRouter>
                <App />
          </BrowserRouter>
       </WalletModalProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
