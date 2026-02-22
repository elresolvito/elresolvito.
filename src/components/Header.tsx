import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Heart, Search } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import type { TabType } from '@/types';

interface HeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onSearchClick: () => void;
}

export function Header({ activeTab, onTabChange, onSearchClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, favorites, setIsCartOpen } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'products', label: 'Productos' },
    { id: 'services', label: 'Servicios' },
    { id: 'rentals', label: 'Rentas' },
    { id: 'offers', label: 'Ofertas Mayor' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d3b33]/95 backdrop-blur-md shadow-lg'
            : 'bg-[#0d3b33]'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#0d3b33] font-bold text-lg md:text-xl">ER</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white text-xl font-bold">El Resolvito</span>
                <span className="text-white/70 text-xs block -mt-1">Tu tienda a domicilio</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-[#0d3b33]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={onSearchClick}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                aria-label="Carrito"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c94a37] text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all hidden sm:block"
                aria-label="Favoritos"
              >
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c94a37] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                aria-label="Menú"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-[#0d3b33] shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <span className="text-white font-bold text-lg">Menú</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    onTabChange(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-[#0d3b33]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Heart className="w-5 h-5" />
                <span>{favorites.length} favoritos</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm mt-3">
                <ShoppingCart className="w-5 h-5" />
                <span>{cartCount} productos en carrito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
