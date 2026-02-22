import { useState, useMemo } from 'react';
import { Tag, Phone, MapPin, Calendar, TrendingDown, MessageCircle, Package, Filter } from 'lucide-react';
import { wholesaleOffers } from '@/data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { WholesaleOffer } from '@/types';

export function OffersSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedOffer, setSelectedOffer] = useState<WholesaleOffer | null>(null);

  const categories = ['Todos', ...Array.from(new Set(wholesaleOffers.map(o => o.category)))];

  const filteredOffers = useMemo(() => {
    if (selectedCategory === 'Todos') return wholesaleOffers;
    return wholesaleOffers.filter(o => o.category === selectedCategory);
  }, [selectedCategory]);

  const handleContact = (phone: string, offer: WholesaleOffer) => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa la oferta: ${offer.title}. ¿Todavía está disponible?`
    );
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const calculateSavings = (original: number, offer: number) => {
    return Math.round(((original - offer) / original) * 100);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Ofertas al Por Mayor</h2>
            <p className="text-gray-600">Las mejores ofertas para revendedores y negocios</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            <span>{filteredOffers.length} ofertas</span>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#0d3b33] to-[#1a5a4d] rounded-2xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <TrendingDown className="w-8 h-8" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                ¿Eres revendedor o tienes un negocio?
              </h3>
              <p className="text-white/80">
                Encuentra precios especiales al comprar al por mayor. 
                Ahorra más comprando en cantidad.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-[#c94a37] text-white">
                      -{calculateSavings(offer.originalPrice, offer.offerPrice)}%
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{offer.category}</Badge>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{offer.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{offer.description}</p>

                  {/* Price Comparison */}
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <span className="text-xs text-gray-500">Antes</span>
                      <div className="text-gray-400 line-through">${offer.originalPrice}</div>
                    </div>
                    <div className="text-2xl font-bold text-[#c94a37]">
                      ${offer.offerPrice}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-1 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#0d3b33]" />
                      <span>Mínimo {offer.minQuantity} unidades</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#0d3b33]" />
                      <span>{offer.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0d3b33]" />
                      <span>Válido hasta {formatDate(offer.validUntil)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setSelectedOffer(offer)}
                    >
                      Ver detalles
                    </Button>
                    <Button
                      onClick={() => handleContact(offer.phone, offer)}
                      className="btn-primary flex-1"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contactar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offer Detail Modal */}
        <Dialog open={!!selectedOffer} onOpenChange={() => setSelectedOffer(null)}>
          <DialogContent className="max-w-lg">
            {selectedOffer && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedOffer.title}</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={selectedOffer.image}
                      alt={selectedOffer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge>{selectedOffer.category}</Badge>
                    <Badge className="bg-[#c94a37]">
                      -{calculateSavings(selectedOffer.originalPrice, selectedOffer.offerPrice)}% OFF
                    </Badge>
                  </div>

                  <p className="text-gray-600">{selectedOffer.description}</p>

                  {/* Price */}
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">Precio normal</span>
                        <div className="text-xl text-gray-400 line-through">${selectedOffer.originalPrice}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">Precio por mayor</span>
                        <div className="text-3xl font-bold text-[#c94a37]">${selectedOffer.offerPrice}</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Ahorras:</span>
                        <span className="font-bold text-[#0d3b33]">
                          ${selectedOffer.originalPrice - selectedOffer.offerPrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Package className="w-4 h-4 text-[#0d3b33]" />
                      <span className="font-medium">Cantidad mínima:</span>
                      <span>{selectedOffer.minQuantity} unidades</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-[#0d3b33]" />
                      <span className="font-medium">Ubicación:</span>
                      <span>{selectedOffer.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-[#0d3b33]" />
                      <span className="font-medium">Válido hasta:</span>
                      <span>{formatDate(selectedOffer.validUntil)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Tag className="w-4 h-4 text-[#0d3b33]" />
                      <span className="font-medium">Proveedor:</span>
                      <span>{selectedOffer.supplier}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-[#0d3b33]" />
                      <span className="font-medium">Contacto:</span>
                      <span>{selectedOffer.phone}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleContact(selectedOffer.phone, selectedOffer)}
                    className="w-full btn-accent"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contactar por WhatsApp
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
