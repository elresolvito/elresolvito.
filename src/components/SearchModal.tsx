import { useState, useMemo } from 'react';
import { Search, X, ShoppingCart, Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { products, services, rentals } from '@/data';
import { useApp } from '@/context/AppContext';
import type { TabType } from '@/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTabChange: (tab: TabType) => void;
}

export function SearchModal({ isOpen, onClose, onTabChange }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const { addToCart, toggleFavorite, isFavorite } = useApp();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    
    const productResults = products
      .filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
      )
      .map(p => ({ type: 'product' as const, item: p }));
    
    const serviceResults = services
      .filter(s => 
        s.name.toLowerCase().includes(lowerQuery) || 
        s.description.toLowerCase().includes(lowerQuery) ||
        s.category.toLowerCase().includes(lowerQuery)
      )
      .map(s => ({ type: 'service' as const, item: s }));
    
    const rentalResults = rentals
      .filter(r => 
        r.title.toLowerCase().includes(lowerQuery) || 
        r.description.toLowerCase().includes(lowerQuery) ||
        r.location.toLowerCase().includes(lowerQuery)
      )
      .map(r => ({ type: 'rental' as const, item: r }));
    
    return [...productResults, ...serviceResults, ...rentalResults].slice(0, 10);
  }, [query]);

  const handleResultClick = (type: string) => {
    onClose();
    setQuery('');
    if (type === 'product') onTabChange('products');
    if (type === 'service') onTabChange('services');
    if (type === 'rental') onTabChange('rentals');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0 gap-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="sr-only">Buscar</DialogTitle>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Buscar productos, servicios, rentas..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-10 py-6 text-lg border-0 focus-visible:ring-0"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          {!query ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Escribe para buscar productos, servicios o rentas</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No se encontraron resultados para &quot;{query}&quot;</p>
            </div>
          ) : (
            <div className="p-2">
              {results.map((result) => (
                <div
                  key={`${result.type}-${result.item.id}`}
                  onClick={() => handleResultClick(result.type)}
                  className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
                >
                  <img
                    src={result.type === 'rental' ? result.item.images[0] : result.item.image}
                    alt={result.type === 'rental' ? result.item.title : result.item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium px-2 py-0.5 bg-gray-100 rounded-full text-gray-600 capitalize">
                        {result.type}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 truncate">
                      {result.type === 'rental' ? result.item.title : result.item.name}
                    </h4>
                    <p className="text-sm text-gray-500 truncate">
                      {result.type === 'rental' ? result.item.location : result.item.description}
                    </p>
                  </div>
                  
                  {result.type === 'product' && (
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#0d3b33]">${result.item.price}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(result.item);
                        }}
                        className="p-2 bg-[#0d3b33] text-white rounded-lg hover:bg-[#0a2e28] transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(result.item.id);
                        }}
                        className={`p-2 rounded-lg transition-colors ${
                          isFavorite(result.item.id)
                            ? 'bg-red-100 text-red-500'
                            : 'bg-gray-100 text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFavorite(result.item.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
