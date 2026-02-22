import { Phone, MapPin, Mail, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d3b33] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0d3b33] font-bold text-xl">ER</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">El Resolvito</h3>
                <p className="text-white/60 text-sm">Tu tienda a domicilio</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Conectamos a los habaneros con los mejores productos, servicios 
              y alojamientos. Facilitamos tu día a día con entregas rápidas 
              y confiables.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/+5351234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-white/70 hover:text-white transition-colors text-sm">
                  Productos
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">
                  Servicios Profesionales
                </a>
              </li>
              <li>
                <a href="#rentals" className="text-white/70 hover:text-white transition-colors text-sm">
                  Casas de Renta
                </a>
              </li>
              <li>
                <a href="#offers" className="text-white/70 hover:text-white transition-colors text-sm">
                  Ofertas al Por Mayor
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-white/70 text-sm">Barbería</span>
              </li>
              <li>
                <span className="text-white/70 text-sm">Tapicería</span>
              </li>
              <li>
                <span className="text-white/70 text-sm">Carpintería</span>
              </li>
              <li>
                <span className="text-white/70 text-sm">Electricidad</span>
              </li>
              <li>
                <span className="text-white/70 text-sm">Plomería</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c94a37] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  La Habana Vieja, Cuba
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c94a37] flex-shrink-0" />
                <a 
                  href="tel:+5351234567" 
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  +53 5 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c94a37] flex-shrink-0" />
                <a 
                  href="mailto:info@elresolvito.com" 
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  info@elresolvito.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#c94a37] flex-shrink-0" />
                <a 
                  href="https://wa.me/+5351234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} El Resolvito. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-[#c94a37] fill-current" /> en La Habana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
