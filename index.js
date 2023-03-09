// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import './index.css';
// import rootReducer from './reducers/todosReducer';
// import App from './App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap'; 
// import bootstrap from "bootstrap";
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(rootReducer, applyMiddleware(thunk));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>
// );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  <BrowserRouter>
  
    <App />
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();