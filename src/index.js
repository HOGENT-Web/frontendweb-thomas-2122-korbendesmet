import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthenticationProvider } from './contexts/AuthenticationProvider';
import { MenuProvider } from './contexts/MenuProvider';

import Header from "./components/Header"
import Footer from "./components/Footer"

import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <MenuProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes className='flex-grow'>
            <Route path="" element={<Main />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </MenuProvider>

    </Router>
  </React.StrictMode>
);