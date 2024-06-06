import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Metrics from './components/Metrics';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';
import Keyproblems from './components/Keyproblems';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Problems />
      <Metrics />
      <Reviews />
      <Keyproblems />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

