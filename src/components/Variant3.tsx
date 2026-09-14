import { Truck, PhoneCall, ChevronRight } from 'lucide-react';
import { services, stats, images } from '../data';

// VARIANT 3: Dark Mode Elite
// High contrast, premium feel, neon yellow accents on deep dark backgrounds.

export default function Variant3() {
  return (
    <div className="font-sans bg-zinc-950 text-zinc-50 pb-24 min-h-screen selection:bg-lime-400 selection:text-black">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/5">
        <div className="flex items-center gap-2 text-2xl font-black tracking-tighter">
          <Truck className="w-7 h-7 text-lime-400" />
          MOVE<span className="font-light text-zinc-400">WELL</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-400">
          <a href="#" className="text-white">Overview</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Fleet</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <button className="flex items-center gap-2 text-sm font-bold text-lime-400 hover:text-lime-300 transition-colors">
          <PhoneCall className="w-4 h-4" /> 1800-MOVE-NOW
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
              Accepting Bookings for Next Month
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Precision <br/>
              <span className="text-lime-400 italic font-medium">Relocation</span> <br/>
              Services.
            </h1>
            <p className="text-lg text-zinc-400 max-w-md mb-10">
              Elite logistics and handling for residential and commercial moves. Zero compromises on safety.
            </p>

            <div className="flex items-center gap-4">
              <button className="bg-lime-400 text-black px-8 py-4 rounded-lg font-bold text-sm hover:bg-lime-500 transition-colors">
                Book a Consultation
              </button>
              <button className="px-8 py-4 rounded-lg font-bold text-sm text-white border border-white/20 hover:bg-white/5 transition-colors">
                View Pricing
              </button>
            </div>
          </div>

          {/* Glowing Form Card */}
          <div className="relative z-10">
            <div className="absolute inset-0 bg-lime-400/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Instant Quote</h3>
              <p className="text-zinc-400 text-sm mb-8">Enter details for an automated estimate.</p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">From</label>
                    <input type="text" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-400 transition-colors" placeholder="City or ZIP" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">To</label>
                    <input type="text" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-400 transition-colors" placeholder="City or ZIP" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Property Size</label>
                  <select className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-lime-400 transition-colors text-zinc-400">
                    <option>Select size...</option>
                    <option>Studio / 1 Bed</option>
                    <option>2-3 Bedrooms</option>
                    <option>4+ Bedrooms</option>
                  </select>
                </div>
                <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors mt-4 flex items-center justify-center gap-2">
                  Calculate Cost <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Stats */}
      <section className="border-y border-white/5 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.id}>
              <div className="text-3xl font-light text-white mb-1">{s.value}</div>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-3xl font-bold mb-12">Core Competencies</h2>
        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {services.map((s, i) => (
            <div key={s.id} className="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors group">
              <s.icon className="w-8 h-8 text-lime-400 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
