import React from "react";
import type { Destination } from "../destinations.ts";

export default function DestinationCard({
  ville,
  prix,
  duree,
  image,
}: Destination) {
  return (
    // 'min-w-[280px] md:min-w-[340px]' : Indispensable pour fixer la taille de la carte dans le slider
    <div className="min-w-[280px] md:min-w-[340px] bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl select-none border border-gray-100/50">
      <div className="h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={ville}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center text-gray-800 text-lg font-bold mb-4 font-poppins">
          <h3>{ville}</h3>
          <span className="text-gray-500 font-medium text-base">{prix}</span>
        </div>

        {/* Petite icône de flèche pour imiter Jadoo */}
        <div className="flex items-center text-gray-600 text-sm gap-2 font-medium font-poppins">
          <span>🚀</span>
          <span>{duree} de voyage</span>
        </div>
      </div>
    </div>
  );
}
