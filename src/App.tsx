import React from 'react';
import logo from './logo.svg';

import './App.css';
import {  Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './page/Home';
import ChiSiamo from './page/ChiSiamo';
import Contattaci from './page/Contattaci';
import Footer from './components/Footer';
import CompillaDocumennto from './page/CompillaDocumennto';
import CheckDocumento from './page/checkDocumento';

function App() {
  return (<>    <Navbar />


     <Routes>
      
          <Route index element={<><Home/></>} />
          <Route path="/about" element={<><ChiSiamo/></> } />
          <Route path="/contatti" element={<><Contattaci/></>} />
          <Route path="/SendDocumenti" element={<><CheckDocumento/></>} />
          <Route path="/compila_i_tuoi_documenti" element={<><CompillaDocumennto/></>} />
          <Route path="*" element={<></>} />
    
      </Routes>
 
            <Footer/>
  </>

  );
}

export default App;
