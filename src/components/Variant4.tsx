import { Truck, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { services, images } from '../data';

// VARIANT 4: Friendly & Soft (App Style)
// Rounded corners, warm orange/peach tones, bubbly and approachable UI.

export default function Variant4() {
  return (
    <div className="font-sans bg-[#FDF8F5] text-[#2D2422] min-h-screen pb-24">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-bold text-[#FF6B00]">
          <div className="w-10 h-10 bg-[#FF6B00] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Truck className="w-5 h-5" />
          </div>
          MoveWell
        </div>
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#8B7A75]">
          <a href="#" className="text-[#2D2422]">Home</a>
          <a href="#" className="hover:text-[#FF6B00] transition-colors">How it works</a>
          <a href="#" className="hover:text-[#FF6B00] transition-colors">Services</a>
          <a href="#" className="hover:text-[#FF6B00] transition-colors">Help</a>
        </nav>
        <button className="bg-white text-[#2D2422] px-6 py-2.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all border border-[#F0E6E1]">
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
        <div className="bg-[#FFEFE5] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF6B00] to-[#FF9D00] opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#FF9D00] to-yellow-400 opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>

          {/* Hero Text */}
          <div className="flex-1 relative z-10 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-[#2D2422]">
              Moving made <br/>
              <span className="text-[#FF6B00] relative inline-block">
                ridiculously
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FF6B00]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
              </span> easy.
            </h1>
            <p className="text-lg text-[#8B7A75] mb-10 max-w-md mx-auto md:mx-0 font-medium">
              Book verified packers and movers in minutes. We handle the heavy lifting with a smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#FF6B00] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Start your move <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="w-full max-w-sm bg-white p-6 rounded-[2rem] shadow-xl relative z-10 border border-[#F0E6E1]">
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-[#FFF5EF] text-[#FF6B00] py-2 rounded-xl font-bold text-sm border border-[#FFE8DA]">Local</button>
              <button className="flex-1 bg-white text-[#8B7A75] py-2 rounded-xl font-bold text-sm hover:bg-gray-50">City</button>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C4B5AF]" />
                <input type="text" placeholder="Pickup location" className="w-full bg-[#FDF8F5] pl-12 pr-4 py-4 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C4B5AF]" />
                <input type="text" placeholder="Drop location" className="w-full bg-[#FDF8F5] pl-12 pr-4 py-4 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C4B5AF]" />
                <input type="date" className="w-full bg-[#FDF8F5] pl-12 pr-4 py-4 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 text-[#8B7A75]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-12">Everything you need</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s, i) => {
            const colors = ['bg-blue-100 text-blue-600', 'bg-emerald-100 text-emerald-600', 'bg-purple-100 text-purple-600'];
            return (
              <div key={s.id} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-[#F0E6E1]">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colors[i]}`}>
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-[#8B7A75] font-medium leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}
