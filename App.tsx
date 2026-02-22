import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ShoppingBag, Wrench, House, Tag } from 'lucide-react';
import type { TabType } from '@/types';

interface HeroProps {
  onTabChange: (tab: TabType) => void;
}

export function Hero({ onTabChange }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

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

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = [
    { icon: ShoppingBag, label: 'Productos', tab: 'products', color: 'bg-emerald-500' },
    { icon: Wrench, label: 'Servicios', tab: 'services', color: 'bg-amber-500' },
    { icon: House, label: 'Rentas', tab: 'rentals', color: 'bg-blue-500' },
    { icon: Tag, label: 'Ofertas', tab: 'offers', color: 'bg-rose-500' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 md:pt-28 pb-12 md:pb-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b33]/5 via-transparent to-[#c94a37]/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#0d3b33]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c94a37]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d3b33]/10 text-[#0d3b33] text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-[#c94a37] rounded-full animate-pulse" />
                Envíos en La Habana Vieja
              </span>
            </div>

            <h1 className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Tus compras a{' '}
              <span className="font-script text-[#c94a37] text-5xl md:text-6xl lg:text-7xl inline-block transform -rotate-2">
                un solo clic
              </span>
            </h1>

            <p className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200 text-gray-600 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Olvídate de las colas. Encuentra productos, servicios profesionales, casas de renta y las mejores ofertas al por mayor en un solo lugar.
            </p>

            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-300">
              <p className="text-sm text-gray-500 mb-4 font-medium">
                ¿Qué buscas hoy?
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.tab}
                      onClick={() => onTabChange(category.tab as TabType)}
                      className="group flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                      <div
                        className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-gray-700 group-hover:text-[#0d3b33] transition-colors">
                        {category.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0d3b33] group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-400 mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#0d3b33]">500+</div>
                  <div className="text-sm text-gray-500">Productos</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#0d3b33]">50+</div>
                  <div className="text-sm text-gray-500">Servicios</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#0d3b33]">30+</div>
                  <div className="text-sm text-gray-500">Rentas</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#c94a37]">24h</div>
                  <div className="text-sm text-gray-500">Entrega</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="fade-in opacity-0 translate-x-6 transition-all duration-700 delay-200 relative">
              <div className="hero-image-mask w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Replaced image with a colored div and shopping icon */}
                <div className="w-full h-full bg-gradient-to-br from-[#0d3b33] to-[#c94a37] flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingBag className="w-24 h-24 text-white mx-auto mb-4" />
                    <span className="text-white text-2xl font-bold">El Resolvito</span>
                  </div>
                </div>
              </div>

              {/* Floating card 1 */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Pedido recibido
                    </div>
                    <div className="text-xs text-gray-500">Hace 2 minutos</div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce"
                style={{ animationDuration: '4s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-amber-400 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-rose-400 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    +100 clientes
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