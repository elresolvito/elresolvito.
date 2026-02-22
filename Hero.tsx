import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShoppingBag, Wrench, Home, Tag, Star, Clock, Shield, Truck } from 'lucide-react';
import type { TabType } from '@/types';

interface HeroProps {
  onTabChange: (tab: TabType) => void;
}

export function Hero({ onTabChange }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Imágenes para el carrusel de fondo
  const backgrounds = [
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200',
    'https://images.unsplash.com/photo-1607082350899-7e8aa7c1f8e0?w=1200',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const quickActions = [
    { icon: ShoppingBag, label: 'Productos', tab: 'products' as TabType, color: 'from-emerald-500 to-emerald-600', bgColor: 'bg-emerald-500' },
    { icon: Wrench, label: 'Servicios', tab: 'services' as TabType, color: 'from-amber-500 to-amber-600', bgColor: 'bg-amber-500' },
    { icon: Home, label: 'Rentas', tab: 'rentals' as TabType, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500' },
    { icon: Tag, label: 'Ofertas', tab: 'offers' as TabType, color: 'from-rose-500 to-rose-600', bgColor: 'bg-rose-500' },
  ];

  const benefits = [
    { icon: Truck, text: 'Entrega en 24h', color: 'text-emerald-600' },
    { icon: Shield, text: 'Pago seguro', color: 'text-blue-600' },
    { icon: Clock, text: 'Atención 24/7', color: 'text-amber-600' },
    { icon: Star, text: 'Mejor calidad', color: 'text-rose-600' },
  ];

  return (
    <section ref={heroRef} className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Carrusel de fondo */}
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <div
            key={bg}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-20' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#0d3b33]/5 to-[#c94a37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#c94a37]/5 to-[#0d3b33]/5 rounded-full blur-3xl" />
      
      {/* Patrón de puntos */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-12 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Contenido */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Badge flotante */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#0d3b33] to-[#1a5a4d] text-white text-sm font-semibold mb-6 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                🚚 Envíos gratis en La Habana Vieja
              </div>
            </div>

            {/* Título principal */}
            <h1 className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight block">
                Tus compras a
              </span>
              <span className="font-script text-[#c94a37] text-6xl md:text-7xl lg:text-8xl inline-block transform -rotate-2 mt-2 drop-shadow-lg">
                un solo clic
              </span>
            </h1>

            {/* Descripción */}
            <p className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200 text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Olvídate de las colas. Encuentra todo lo que necesitas: productos, servicios profesionales, 
              casas de renta y las mejores ofertas al por mayor en un solo lugar.
            </p>

            {/* Botones de acción rápida (mejorados) */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-300">
              <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
                ¿Qué buscas hoy?
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {quickActions.map((action) => (
                  <button
                    key={action.tab}
                    onClick={() => onTabChange(action.tab)}
                    className="group relative flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  >
                    {/* Efecto de hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Icono con efecto */}
                    <div className={`relative w-12 h-12 ${action.bgColor} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    
                    {/* Texto */}
                    <div className="relative">
                      <span className="font-bold text-gray-700 group-hover:text-gray-900 transition-colors block">
                        {action.label}
                      </span>
                      <span className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                        Ver ahora →
                      </span>
                    </div>
                    
                    <ArrowRight className="relative w-5 h-5 text-gray-400 group-hover:text-[#0d3b33] group-hover:translate-x-2 transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>

            {/* Beneficios */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-400 mt-10 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ${benefit.color}`}>
                      <benefit.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estadísticas mejoradas */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-500 mt-8">
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#0d3b33] to-[#1a5a4d] bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <ShoppingBag className="w-3 h-3" /> Productos
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Wrench className="w-3 h-3" /> Servicios
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    30+
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Home className="w-3 h-3" /> Rentas
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
                    24h
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Entrega
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen mejorada */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="fade-in opacity-0 translate-x-6 transition-all duration-700 delay-200 relative">
              <div className="hero-image-mask w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] relative group">
                <img
                  src={backgrounds[currentSlide]}
                  alt="Compras en La Habana"
                  className="w-full h-full object-cover transition-transform duration-10000 group-hover:scale-110"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Indicadores del carrusel */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {backgrounds.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'w-8 bg-white shadow-lg' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Tarjetas flotantes animadas */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 animate-float-slow group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Pedido #1234</div>
                    <div className="text-xs text-gray-500">Entregado hoy</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 animate-float group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">
                      MJ
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">
                      CP
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">
                      AG
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900">+150 clientes</div>
                    <div className="text-xs text-gray-500">hoy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}