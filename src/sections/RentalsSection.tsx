import { useState, useMemo } from 'react';
import { Bed, Bath, Users, Phone, MessageCircle, ChevronLeft, ChevronRight, Filter, Star } from 'lucide-react';
import { rentals, rentalLocations } from '@/data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { Rental } from '@/types';

export function RentalsSection() {
  const [selectedLocation, setSelectedLocation] = useState('Todos');
  const [selectedRental, setSelectedRental] = useState<Rental | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredRentals = useMemo(() => {
    if (selectedLocation === 'Todos') return rentals;
    return rentals.filter(r => r.location === selectedLocation);
  }, [selectedLocation]);

  const handleContact = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
  };

  const nextImage = () => {
    if (selectedRental) {
      setCurrentImageIndex((prev) => 
        prev === selectedRental.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRental) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedRental.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Casas de Renta</h2>
            <p className="text-gray-600">Encuentra el alojamiento perfecto para tu estancia</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            <span>{filteredRentals.length} propiedades</span>
          </div>
        </div>

        {/* Locations */}
        <div className="flex flex-wrap gap-2 mb-8">
          {rentalLocations.map((location) => (
            <button
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`category-btn ${selectedLocation === location ? 'active' : ''}`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Rentals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRentals.map((rental) => (
            <div
              key={rental.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={rental.images[0]}
                  alt={rental.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-900">{rental.location}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1 text-white mb-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{rental.rating}</span>
                    <span className="text-white/70">({rental.reviews} reseñas)</span>
                  </div>
                  <h3 className="text-white font-bold text-xl">{rental.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{rental.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Bed className="w-4 h-4 text-[#0d3b33]" />
                    <span>{rental.bedrooms} hab</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Bath className="w-4 h-4 text-[#0d3b33]" />
                    <span>{rental.bathrooms} baños</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-[#0d3b33]" />
                    <span>{rental.maxGuests} huéspedes</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {rental.amenities.slice(0, 3).map((amenity, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                  {rental.amenities.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      +{rental.amenities.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-[#0d3b33]">${rental.price}</span>
                    <span className="text-gray-500 text-sm">/noche</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedRental(rental);
                        setCurrentImageIndex(0);
                      }}
                    >
                      Ver fotos
                    </Button>
                    <Button
                      onClick={() => handleContact(rental.phone)}
                      className="btn-primary"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Reservar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rental Detail Modal */}
        <Dialog 
          open={!!selectedRental} 
          onOpenChange={() => {
            setSelectedRental(null);
            setCurrentImageIndex(0);
          }}
        >
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedRental && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedRental.title}</DialogTitle>
                </DialogHeader>
                
                {/* Image Gallery */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={selectedRental.images[currentImageIndex]}
                    alt={selectedRental.title}
                    className="w-full h-full object-cover"
                  />
                  {selectedRental.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedRental.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge>{selectedRental.location}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{selectedRental.rating}</span>
                      <span className="text-gray-500">({selectedRental.reviews} reseñas)</span>
                    </div>
                  </div>

                  <p className="text-gray-600">{selectedRental.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-6 py-4 border-y">
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-[#0d3b33]" />
                      <span className="font-medium">{selectedRental.bedrooms} habitaciones</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-[#0d3b33]" />
                      <span className="font-medium">{selectedRental.bathrooms} baños</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#0d3b33]" />
                      <span className="font-medium">{selectedRental.maxGuests} huéspedes</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Comodidades</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRental.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="text-sm px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-2 text-sm bg-gray-50 p-3 rounded-xl">
                    <Phone className="w-4 h-4 text-[#c94a37]" />
                    <span>{selectedRental.phone}</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="text-3xl font-bold text-[#0d3b33]">${selectedRental.price}</span>
                      <span className="text-gray-500">/noche</span>
                    </div>
                    <Button 
                      onClick={() => handleContact(selectedRental.phone)}
                      className="btn-accent"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Contactar por WhatsApp
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
