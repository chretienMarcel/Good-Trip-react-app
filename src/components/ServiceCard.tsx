import React from 'react';

export default function ServiceCard({icone, title, description}: {icone: string, title: string, description: string}) {
    return (
        /* 
           1. LE PARENT GLOBAL (Le cadre invisible)
           - 'group' : Permet de déclencher des animations sur les enfants quand le parent est survolé.
           - 'relative' : Très important, il empêche la forme chocolat de s'envoler n'importe où.
        */
        <div className="relative group cursor-pointer select-non mb-32">
            
            {/* 🍫 2. LA FORME CHOCOLAT DÉCORATIVE EN ARRIÈRE-PLAN */}
            {/* - 'absolute -bottom-3 -left-3' : On la place exprès à cheval sur le bord inférieur gauche (-12px) */}
            {/* - 'opacity-0 scale-75' : Cachée et légèrement rétrécie par défaut */}
            {/* - 'group-hover:opacity-100 group-hover:scale-100' : Dès qu'on entre dans la carte, elle apparaît et grandit */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-red-400 rounded-tr-3xl rounded-bl-3xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-0"></div>

            {/* 🧱 3. LA CARTE BLANCHE PRINCIPALE (Au-dessus du chocolat) */}
            {/* - 'z-10 relative' : Obligatoire pour passer AU-DESSUS du bloc chocolat */}
            {/* - 'group-hover:-translate-y-2' : La carte blanche monte, tandis que le chocolat reste en bas, créant un superbe écart visuel */}
            <div className="relative z-10 bg-white rounded-3xl p-8 text-center shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 border border-gray-100/50 flex flex-col items-center min-h-[250px]">
                
                {/* L'icône */}
                <div className="text-4xl mb-4 bg-orange-50/50 w-16 h-16 flex items-center justify-center rounded-2xl">
                    {icone}
                </div>
                
                {/* Le titre */}
                <h3 className="font-poppins text-lg font-bold text-blue-950 mb-2">
                    {title}
                </h3>
                
                {/* La description */}
                <p className="font-poppins text-sm text-gray-500 leading-relaxed">
                    {description}
                </p>

            </div>

        </div>
    );
}
