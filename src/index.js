import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import App from './App/App';
import { Provider } from "react-redux";
import store from './App/features/store'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
