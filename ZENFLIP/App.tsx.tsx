
import React, { useState, useEffect } from 'react';
import Deck from './components/Deck';
import { CardData } from './types';
import { generateCardContent } from './services/geminiService';

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const data = await generateCardContent();
      setCards(data);
      // Small delay to ensure smooth transition
      setTimeout(() => setLoading(false), 800);
    };
    init();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="pt-6 md:pt-10 pb-2 text-center px-6">
          <div className="inline-block px-4 py-1 mb-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black">
            ΤΕΧΝΗ & ΣΤΟΧΑΣΜΟΣ
          </div>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter text-white mb-1">
            ZEN<span className="font-black text-blue-500">FLIP</span>
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto text-[11px] md:text-sm font-medium leading-relaxed tracking-wide opacity-80 uppercase italic">
            Τι κοιτάζουμε όταν βλέπουμε
          </p>
        </header>

        <main className="flex-1 flex flex-col items-center">
          {loading ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin"></div>
                <div className="absolute inset-3 border-b-2 border-indigo-500 rounded-full animate-spin-slow"></div>
              </div>
              <div className="text-blue-500/50 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
                Φόρτωση Τράπουλας
              </div>
            </div>
          ) : (
            <Deck cards={cards} />
          )}
        </main>

        <footer className="py-6 text-center">
          <div className="text-slate-700 text-[9px] font-black uppercase tracking-[0.4em]">
            &copy; 2026 ZenFlip Experience | made by olga ziro
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;