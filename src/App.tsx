import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/header/header';
import styles from "./App.module.css";
import { Banner } from './components/banner/banner';
import { Music } from './components/music';
import { Footer } from './components/footer/footer';
import { Events } from './components/events/events';
import Contact from './components/contact/contact';
function App() {
 
  return (
    <>
    <Header />
    <Banner />
    <BrowserRouter>
    <Routes>
            <Route path="/"  element={<><Music /></>}>
            </Route>
            <Route path="/events" element={<><Events /></>}>
            </Route>
            <Route path="/contact" element={<><Contact /></>}>
            </Route>
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
    
  );
}

export default App;
