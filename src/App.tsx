import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CartDrawer } from '@/components/CartDrawer';
import { SearchModal } from '@/components/SearchModal';
import { Footer } from '@/components/Footer';
import { ProductsSection } from '@/sections/ProductsSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { RentalsSection } from '@/sections/RentalsSection';
import { OffersSection } from '@/sections/OffersSection';
import { AppProvider } from '@/context/AppContext';
import type { TabType } from '@/types';
import { Toaster } from '@/components/ui/sonner';

function AppContent() {
  const [activeTab, setActiveTab] = useState<TabType>('products');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeTab) {
      case 'products':
        return <ProductsSection />;
      case 'services':
        return <ServicesSection />;
      case 'rentals':
        return <RentalsSection />;
      case 'offers':
        return <OffersSection />;
      default:
        return <ProductsSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onSearchClick={() => setIsSearchOpen(true)}
      />
      
      <main>
        <Hero onTabChange={setActiveTab} />
        
        {/* Section Navigation Tabs */}
        <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide gap-1 py-3">
              {[
                { id: 'products' as TabType, label: 'Productos', icon: '🛍️' },
                { id: 'services' as TabType, label: 'Servicios', icon: '🔧' },
                { id: 'rentals' as TabType, label: 'Rentas', icon: '🏠' },
                { id: 'offers' as TabType, label: 'Ofertas Mayor', icon: '🏷️' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#0d3b33] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Section */}
        <div className="min-h-[60vh]">
          {renderSection()}
        </div>
      </main>

      <Footer />
      
      <CartDrawer />
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onTabChange={setActiveTab}
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#0d3b33] text-white rounded-full shadow-lg hover:bg-[#0a2e28] hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Volver arriba"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <Toaster position="bottom-center" />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
