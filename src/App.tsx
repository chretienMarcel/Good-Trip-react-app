import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services.tsx';
import './App.css'

function App() {

  return (
   <div>
     <Navbar />
     <Hero />
     <Services />
   </div>
  )
}

export default App
