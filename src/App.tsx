import { useState } from 'react';
import Variant1 from './components/Variant1';
import Variant2 from './components/Variant2';
import Variant3 from './components/Variant3';
import Variant4 from './components/Variant4';
import { LayoutTemplate } from 'lucide-react';

export default function App() {
  const [activeVariant, setActiveVariant] = useState(1);

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col font-sans">
      {/* Top Switcher Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-xl shadow-2xl rounded-full p-2 border border-neutral-200 flex items-center gap-2 transition-all">
        <span className="px-4 text-sm font-bold text-neutral-800 hidden sm:flex items-center gap-2">
          <LayoutTemplate size={18} className="text-amber-500" /> Variants
        </span>
        <div className="flex gap-1 border-l border-neutral-200 pl-2">
            {[1, 2, 3, 4].map((v) => (
            <button
                key={v}
                onClick={() => setActiveVariant(v)}
                className={`w-10 h-10 rounded-full font-bold transition-all duration-300 ${
                activeVariant === v 
                    ? 'bg-amber-400 text-black shadow-lg scale-110' 
                    : 'bg-transparent text-neutral-500 hover:bg-neutral-100'
                }`}
            >
                {v}
            </button>
            ))}
        </div>
      </div>

      {/* Active Variant Rendering */}
      <div className="flex-1 w-full bg-white">
        {activeVariant === 1 && <Variant1 />}
        {activeVariant === 2 && <Variant2 />}
        {activeVariant === 3 && <Variant3 />}
        {activeVariant === 4 && <Variant4 />}
      </div>
    </div>
  );
}
