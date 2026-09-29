import React, { useRef } from "react";
import { listeDestinations } from "../destinations";
import DestinationCard from "./DestinationCard";

export default function Destinations() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollGauche = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft -= 360;
  };

  const scrollDroite = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft += 360;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 mb-32 select-none">
      
      {/* 1. EN-TÊTE ÉPURÉ (Les boutons n'y sont plus) */}
      <div className="mb-12">
        <span className="font-poppins text-sm font-bold text-gray-500 uppercase tracking-widest block mb-2">Top Selling</span>
        <h2 className="font-volkhov text-3xl md:text-5xl font-bold text-blue-950">Top Destinations</h2>
      </div>

      {/* 2. LE CONTENEUR CADRE DE RÉFÉRENCE (relative) */}
      <div className="relative group">
        
        {/* BOUTON GAUCHE ABSOLU */}
        {/* - 'absolute top-1/2 -translate-y-1/2' : Aligne pile au milieu vertical de la carte */}
        {/* - '-left-5' : Le fait déborder légèrement sur le côté gauche pour le style */}
        <button 
          onClick={scrollGauche} 
          className="absolute top-1/2 -translate-y-1/2 -left-5 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-900 hover:text-white transition-all cursor-pointer"
        >
          ❮
        </button>

        {/* BOUTON DROIT ABSOLU */}
        {/* - '-right-5' : Le fait déborder sur le côté droit */}
        <button 
          onClick={scrollDroite} 
          className="absolute top-1/2 -translate-y-1/2 -right-5 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-900 hover:text-white transition-all cursor-pointer"
        >
          ❯
        </button>

        {/* ZONE DE DÉFILEMENT INTACTE */}
        <div 
          ref={sliderRef} 
          className="flex gap-8 overflow-x-auto scroll-smooth pb-4" 
          style={{ scrollbarWidth: 'none' }}
        >
          {listeDestinations.map((dest) => (
            <DestinationCard 
              key={dest.id}
              id={dest.id}
              ville={dest.ville}
              prix={dest.prix}
              duree={dest.duree}
              image={dest.image}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
