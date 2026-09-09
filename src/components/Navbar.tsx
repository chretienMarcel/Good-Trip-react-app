import React, { useState } from 'react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [langue, setLangue] = useState('EN');

  return (
    // Le grand conteneur horizontal
    <div className='flex flex-row justify-between items-center mx-auto max-w-6xl pt-6 px-6'>
      
      {/* 1. LE LOGO */}
      <div className="text-2xl font-black tracking-tight text-slate-900 select-none">
        Good Trip<span className="text-orange-500">.</span>
      </div>
      
      {/* 2. LE BLOC DE DROITE GLOBAL */}
      <div className='flex flex-row items-center gap-8 text-sm font-medium text-gray-600'>
        
        {/* Liens de navigation */}
        <a href="#service" className="hover:text-orange-500 transition-colors duration-200">Service</a>
        <a href="#destination" className="hover:text-orange-500 transition-colors duration-200">Destination</a>
        <a href="#booking" className="hover:text-orange-500 transition-colors duration-200">Booking</a>
        <a href="#testimonial" className="hover:text-orange-500 transition-colors duration-200">Testimonial</a>
        
        {/* Connexion */}
        <a href="#login" className="hover:text-orange-500 transition-colors duration-200 ml-4">Login</a>
        
        {/* Bouton Sign Up */}
        <a 
          href="#signup" 
          className="border border-gray-400 rounded-lg px-4 py-1.5 text-gray-700 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300"
        >
          Sign Up
        </a>

        {/* 3. LE DROPDOWN DES LANGUES INTERACTIF */}
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className="relative flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors ml-2 select-none"
        >
          <span>{langue}</span>
          <span className="text-xs transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            ▼
          </span>

          {/* Rendu conditionnel du petit menu de sélection */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-20 bg-white border border-gray-100 rounded-md shadow-lg py-1 text-center text-gray-700 z-50">
              <div 
                onClick={() => setLangue('EN')} 
                className={`px-3 py-1 hover:bg-gray-50 text-xs font-semibold cursor-pointer ${langue === 'EN' ? 'text-orange-500 bg-orange-50' : ''}`}
              >
                EN
              </div>
              <div 
                onClick={() => setLangue('FR')} 
                className={`px-3 py-1 hover:bg-gray-50 text-xs font-semibold cursor-pointer ${langue === 'FR' ? 'text-orange-500 bg-orange-50' : ''}`}
              >
                FR
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
