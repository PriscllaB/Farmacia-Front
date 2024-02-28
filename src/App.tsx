import React from 'react';
import './App.css';

import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import ListaCategoria from './components/categoria/listaCategoria/listaCategoria';






function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListaCategoria />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;