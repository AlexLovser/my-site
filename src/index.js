import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reduxStorage/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './screens/About/About';
import Networks from './screens/Networks/Networks';
import Works from './screens/Works/Works';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route exact path="about" element={<About />}/>
            <Route path="networks" element={<Networks />}/>
            <Route path="works" element={<Works />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
