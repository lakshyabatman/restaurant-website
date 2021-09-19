import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import FeaturedDishes from './Components/FeaturedDishes';
import Services from './Components/Services';
import ReachUs from './Components/ReachUs';
import { BackTop } from 'antd';

function App() {
  return (
    <>
    <BackTop/>
      <div className="hero-layout">
        <Header />
        <Hero/>
      </div>
      <FeaturedDishes/>
      <Services/>
      <ReachUs/>
    </>
  );
}

export default App;
