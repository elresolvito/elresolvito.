import { ShoppingBag } from 'lucide-react';
import type { TabType } from '@/types';

interface HeroProps {
  onTabChange: (tab: TabType) => void;
}

export function Hero({ onTabChange }: HeroProps) {
  return (
    <div className="bg-[#0d3b33] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-4">
            El Resolvito
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Tu tienda a domicilio en La Habana. Productos, servicios, rentas y ofertas al por mayor.
          </p>
          
          {/* Botones de categoría simplificados */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => onTabChange('products')}
              className="bg-white text-[#0d3b33] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => onTabChange('services')}
              className="bg-white text-[#0d3b33] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => onTabChange('rentals')}
              className="bg-white text-[#0d3b33] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Rentas
            </button>
            <button
              onClick={() => onTabChange('offers')}
              className="bg-white text-[#0d3b33] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Ofertas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
