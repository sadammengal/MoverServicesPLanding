import { Truck, ArrowRight } from 'lucide-react';
import { services, images } from '../data';

// VARIANT 2: Modern Minimalist & Horizontal Flow
// Focuses on whitespace, massive typography, and a streamlined horizontal quote form.

export default function Variant2() {
  return (
    <div className="font-sans text-neutral-900 pb-24 bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Truck className="w-6 h-6" />
          MoveWell.
        </div>
        <nav className="hidden md:flex items-center gap-10 font-medium text-sm text-neutral-500">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="hover:text-black transition-colors">Services</a>
          <a href="#" className="hover:text-black transition-colors">Pricing</a>
          <a href="#" className="hover:text-black transition-colors">Company</a>
        </nav>
        <button className="bg-black text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-neutral-800 transition-colors">
          Contact Us
        </button>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter max-w-4xl leading-[1.05]">
          Relocate with zero <br/>
          <span className="text-neutral-400">friction and stress.</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-500 max-w-2xl">
          The modern standard for residential and commercial moving. Seamless, secure, and on your schedule.
        </p>

        {/* Horizontal Form */}
        <div className="mt-12 w-full max-w-5xl bg-neutral-50 p-2 rounded-2xl shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-2">
          <input type="text" placeholder="Full Name" className="flex-1 px-5 py-4 bg-white rounded-xl outline-none focus:ring-2 focus:ring-black border border-transparent focus:border-neutral-200 transition-all text-sm" />
          <input type="text" placeholder="Moving From" className="flex-1 px-5 py-4 bg-white rounded-xl outline-none focus:ring-2 focus:ring-black border border-transparent focus:border-neutral-200 transition-all text-sm" />
          <input type="text" placeholder="Moving To" className="flex-1 px-5 py-4 bg-white rounded-xl outline-none focus:ring-2 focus:ring-black border border-transparent focus:border-neutral-200 transition-all text-sm" />
          <select className="flex-1 px-5 py-4 bg-white rounded-xl outline-none focus:ring-2 focus:ring-black border border-transparent focus:border-neutral-200 transition-all text-sm text-neutral-500">
            <option value="">Move Size</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3+ BHK</option>
          </select>
          <button className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
            Get Estimate <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Large Image */}
      <section className="px-4 md:px-12 pb-24">
        <div className="w-full h-[500px] rounded-3xl overflow-hidden relative">
          <img src={images.hero1} alt="Clean Moving" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </section>

      {/* Minimal Services */}
      <section className="px-12 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Our capabilities</h2>
          <p className="text-neutral-500 max-w-md text-sm">
            We provide end-to-end logistics and relocation services tailored to your specific requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {services.slice(0, 4).map(s => (
            <div key={s.id} className="group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <s.icon className="w-5 h-5 text-neutral-900" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
