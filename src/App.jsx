import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products';
import Contacts from './pages/Contacts/Contacts'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
    </div>
  );
};

export default App;



