import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rapot from './Rapot';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Formulir2 from './Form';
// import Boot from './Boot';
// import Coba from './Coba';
// import Data from './Data'



ReactDOM.render(
  <React.StrictMode>
    <Rapot />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
