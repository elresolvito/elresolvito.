import { useState, useMemo } from 'react';
import { Phone, MapPin, Star, Clock, MessageCircle, Filter } from 'lucide-react';
import { services, serviceCategories } from '@/data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { Service } from '@/types';

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'Todos') return services;
    return services.filter(s => s.category === selectedCategory);
  }, [selectedCategory]);

  const handleContact = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Servicios Profesionales</h2>
            <p className="text-gray-600">Encuentra los mejores profesionales para lo que necesites</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            <span>{filteredServices.length} servicios</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {serviceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/90 text-gray-900 mb-2">{service.category}</Badge>
                  <h3 className="text-white font-bold text-lg">{service.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-[#c94a37]" />
                    <span>{service.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-[#c94a37]" />
                    <span>{service.availability}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-gray-900">{service.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({service.reviews} reseñas)</span>
                  </div>
                  <span className="text-[#0d3b33] font-bold">{service.priceRange}</span>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedService(service)}
                  >
                    Ver más
                  </Button>
                  <Button
                    onClick={() => handleContact(service.phone)}
                    className="btn-primary flex-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contactar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-lg">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedService.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={selectedService.image}
                      alt={selectedService.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge>{selectedService.category}</Badge>
                    <span className="text-[#0d3b33] font-bold">{selectedService.priceRange}</span>
                  </div>
                  
                  <p className="text-gray-600">{selectedService.description}</p>
                  
                  <div className="space-y-2 bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-[#c94a37]" />
                      <span>{selectedService.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-[#c94a37]" />
                      <span>{selectedService.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-[#c94a37]" />
                      <span>{selectedService.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-lg">{selectedService.rating}</span>
                    <span className="text-gray-500">({selectedService.reviews} reseñas)</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleContact(selectedService.phone)}
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
