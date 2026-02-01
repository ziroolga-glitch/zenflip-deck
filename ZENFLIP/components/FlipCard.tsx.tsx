
import React, { useState } from 'react';
import { CardData } from '../types';

interface FlipCardProps {
  card: CardData;
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ card, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="perspective w-[280px] xs:w-[300px] md:w-[420px] h-[420px] md:h-[550px] cursor-pointer"
      onClick={handleFlip}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side: Clean, non-filtered rendering */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-[#f8f6f2] flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 space-y-6 md:space-y-8">
            <div className="w-full h-48 md:h-64 bg-slate-900 shadow-inner rounded-lg flex items-center justify-center border border-black/5 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white,_transparent)] scale-150"></div>
               </div>
               <div className="relative flex flex-col items-center gap-4 text-slate-500/30">
                  <i className="fa-solid fa-eye text-5xl md:text-7xl text-blue-500/40"></i>
               </div>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <h3 className="text-slate-900 font-serif italic text-xl md:text-3xl tracking-tight mb-2 md:mb-4 uppercase">ΒΛΕΜΜΑ & ΣΤΟΧΑΣΜΟΣ</h3>
              
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
                <span className="h-[1px] w-8 md:w-12 bg-slate-200"></span>
                <span className="text-slate-400 text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black">Κάρτα {index + 1}</span>
                <span className="h-[1px] w-8 md:w-12 bg-slate-200"></span>
              </div>

              <div className="text-slate-400/60 text-[7px] md:text-[9px] uppercase tracking-[0.5em] font-bold mt-1">
                made by olga ziro 2026
              </div>
            </div>
          </div>
          
          <div className="p-4 md:p-8 flex justify-center border-t border-black/5 bg-white/50">
            <div className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-2 md:py-3 rounded-full bg-slate-950 text-white text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black shadow-lg">
              <i className="fa-solid fa-rotate"></i>
              κλικ για την ερώτηση
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-slate-900 flex flex-col p-6 md:p-8 items-center justify-center text-center space-y-6 md:space-y-8">
          <div className="flex flex-col items-center gap-2">
            <div className="text-blue-500 font-black text-[10px] md:text-[12px] tracking-[0.3em] uppercase opacity-90 mb-1 md:mb-2">
              Ερωτήσεις Στοχασμού
            </div>
            <div className="w-12 h-12 md:w-16 h-16 rounded-full border-2 border-blue-500/20 flex items-center justify-center text-white text-lg md:text-2xl font-light bg-blue-500/10">
              {index + 1}
            </div>
          </div>
          
          <h2 className="text-lg md:text-2xl font-light leading-relaxed text-slate-100 px-2 md:px-4 min-h-[120px] md:min-h-[160px] flex items-center justify-center">
            {card.question}
          </h2>
          
          <div className="pt-6 md:pt-10 border-t border-white/5 w-full flex flex-col items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3 text-slate-500 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black">
              <i className="fa-solid fa-rotate-left text-blue-500/60 text-sm"></i>
              Επιστροφή
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
