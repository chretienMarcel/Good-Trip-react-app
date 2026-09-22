import React from 'react';
import ServiceCard from './ServiceCard'; // On importe notre moule épuré

export default function Services() {
    return (
        // Le conteneur principal qui centre et espace toute la section
        <div className='text-center mx-auto max-w-6xl pt-16 px-6 select-none'>
            
            {/* Les titres généraux de la section (Affichés UNE SEULE FOIS au sommet) */}
            <h3 className='font-poppins text-gray-500 font-bold uppercase tracking-widest text-sm mb-2'>
                CATEGORY
            </h3>
            <p className='font-volkhov text-4xl md:text-5xl font-bold text-blue-950 tracking-tight leading-tight mb-16'>
                We offer best services
            </p>

            {/* 🌐 LA GRILLE TAILWIND */}
            {/* grid-cols-1 (1 colonne sur mobile) et md:grid-cols-4 (4 colonnes sur ordinateur) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <ServiceCard 
                    icone="🌤️" 
                    title="Calculated Weather" 
                    description="Built Wicket longer admire do barton vanity itself do in it." 
                />

                <ServiceCard 
                    icone="✈️" 
                    title="Best Flights" 
                    description="Engrossed listening. Park gate sell they west hard for the." 
                />

                <ServiceCard 
                    icone="🎤" 
                    title="Local Events" 
                    description="Barton vanity itself do in it. Preferred to sportsmen it engrossed." 
                />

                <ServiceCard 
                    icone="⚙️" 
                    title="Customization" 
                    description="We deliver outsourced aviation services for military customers." 
                />

            </div>
        </div>
    );
}
