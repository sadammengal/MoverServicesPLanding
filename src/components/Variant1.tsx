import { Truck, Phone, ChevronRight } from 'lucide-react';
import { services, features, stats, images } from '../data';

// VARIANT 1: The Classic Authority (Modernized Original)
// Focuses on strong contrast, yellow/black branding, and a structured layout.

export default function Variant1() {
  return (
    <div className="text-slate-800 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center gap-2 text-2xl font-black tracking-tight text-slate-900">
          <Truck className="w-8 h-8 text-amber-400" />
          MOVE<span className="text-amber-500">WELL</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-slate-600">
          <a href="#" className="text-amber-500">Home</a>
          <a href="#" className="hover:text-amber-500 transition-colors">About Us</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Services</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Pricing</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">24/7 Support</span>
            <span className="font-bold text-slate-900 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500" /> +91 12345 67890
            </span>
          </div>
          <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-2.5 rounded-sm font-bold text-sm transition-colors">
            Get a Quote
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 right-1/3 z-0">
          <img src={images.hero2} alt="Moving Truck" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 font-bold text-sm rounded-full">
              #1 Packers & Movers
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              WE MAKE YOUR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                MOVE SAFE &
              </span> <br/>
              STRESS FREE
            </h1>
            <p className="text-lg text-slate-600 max-w-lg font-medium">
              Professional Packers & Movers for a Hassle-free Relocation. We handle your belongings like our own.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {features.map(f => (
                <div key={f.id} className="flex items-start gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{f.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Form */}
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100">
            <div className="bg-amber-400 -mx-8 -mt-8 p-6 rounded-t-2xl mb-6">
              <h3 className="text-xl font-black text-slate-900 text-center">GET A FREE QUOTE</h3>
              <p className="text-center text-slate-800 text-sm font-medium">Quick. Easy. Free.</p>
            </div>
            
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all" />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all" />
              <div className="flex gap-4">
                <input type="text" placeholder="Moving From" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all" />
                <input type="text" placeholder="Moving To" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all" />
              </div>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all text-slate-500">
                <option value="">Move Type</option>
                <option value="home">Home Shifting</option>
                <option value="office">Office Shifting</option>
              </select>
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-md transition-colors flex items-center justify-center gap-2 group mt-2">
                GET FREE QUOTE
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-amber-400 py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-amber-500">
          {stats.map(s => (
            <div key={s.id} className="text-center pl-8 first:pl-0 border-l-0">
              <div className="text-3xl font-black text-slate-900 mb-1">{s.value}</div>
              <div className="text-sm font-bold text-slate-800 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 inline-block relative">
            OUR SERVICES
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-amber-400 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(s => (
            <div key={s.id} className="group p-8 border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-xl transition-all cursor-pointer bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 z-0"></div>
              <div className="relative z-10">
                <s.icon className="w-10 h-10 text-amber-500 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                <span className="text-amber-500 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
