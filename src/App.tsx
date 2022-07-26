import React from 'react';
import logo from './logo.svg';
import { Header } from './components/header/header';
import styles from "./App.module.css";
import { Banner } from './components/banner/banner';
import { Music } from './components/music';
import { Footer } from './components/footer/footer';
import { Events } from './components/events/events';
function App() {
  return (
    <>
    <Header />
    <Banner />
    <Music />
    <Events />
    <Footer />
    </>
    
  );
}

export default App;
