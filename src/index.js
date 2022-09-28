import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faUser, faStar, faMagnifyingGlass, faCircleQuestion, faCartShopping, faCartPlus, faChevronRight, faMobile, faLaptop, faVolleyball, faGamepad, faShirt, faCarSide, faEllipsis } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faUser, faStar, faMagnifyingGlass, faCircleQuestion, faCartShopping, faCartPlus, faChevronRight, faMobile, faLaptop, faVolleyball, faGamepad, faShirt, faCarSide, faEllipsis)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();