import type { Product, Service, Rental, WholesaleOffer } from '@/types';

export const products: Product[] = [
  // Alimentos y conservas
  { id: 1, name: 'Atún en lata', price: 500, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', description: 'Atún fresco en conserva, ideal para ensaladas y pastas.', specificDetails: 'Lata estándar', category: 'Alimentos', department: 'mercado', status: 'available' },
  { id: 2, name: 'Pasta de tomate', price: 350, image: 'https://images.unsplash.com/photo-1594972949099-6a8db5d5a5c3?w=400', description: 'Concentrado de tomate para salsas y guisos.', specificDetails: 'Paquete', category: 'Alimentos', department: 'mercado', status: 'available' },
  { id: 3, name: 'Pimiento fresco', price: 750, image: 'https://images.unsplash.com/photo-1563565375-f3fdf5e2c691?w=400', description: 'Pimiento jugoso y lleno de sabor.', specificDetails: 'Unidad', category: 'Alimentos', department: 'mercado', status: 'available' },
  { id: 4, name: 'Café premium 250g', price: 1450, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', description: 'Café molido aromático y balanceado.', specificDetails: 'Paquete 250g', category: 'Alimentos', department: 'mercado', status: 'available' },
  { id: 5, name: 'Cartón de huevo 30u', price: 3000, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400', description: 'Huevos frescos en cartón de 30 unidades.', specificDetails: 'Cartón', category: 'Alimentos', department: 'mercado', status: 'available' },
  { id: 6, name: 'Leche condensada', price: 950, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400', description: 'Leche condensada cremosa, perfecta para postres.', specificDetails: 'Lata 397g', category: 'Alimentos', department: 'mercado', status: 'available' },
  { id: 7, name: 'Harina blanca 1Kg', price: 600, image: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=400', description: 'Harina refinada ideal para repostería y panadería.', specificDetails: 'Paquete 1Kg', category: 'Alimentos', department: 'mercado', status: 'available' },
  
  // Snacks
  { id: 8, name: 'Papitas crujientes', price: 400, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400', description: 'Snacks crujientes sabor ajo.', specificDetails: 'Paquete 90g', category: 'Snacks', department: 'mercado', status: 'available' },
  { id: 9, name: 'Galletas surtidas', price: 690, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400', description: 'Galletas variadas para toda la familia.', specificDetails: 'Paquete', category: 'Snacks', department: 'mercado', status: 'available' },
  
  // Salsas
  { id: 10, name: 'Mayonesa premium', price: 850, image: 'https://images.unsplash.com/photo-1585652757141-8837edd1e8c3?w=400', description: 'Mayonesa suave y cremosa.', specificDetails: 'Frasco mediano', category: 'Salsas', department: 'mercado', status: 'available' },
  { id: 11, name: 'Ketchup tradicional', price: 450, image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=400', description: 'Salsa de tomate clásica.', specificDetails: 'Frasco', category: 'Salsas', department: 'mercado', status: 'available' },
  
  // Higiene personal
  { id: 12, name: 'Jabón de tocador', price: 150, image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=400', description: 'Jabón suave para el cuidado diario.', specificDetails: 'Pastilla', category: 'Higiene', department: 'mercado', status: 'available' },
  { id: 13, name: 'Papel sanitario', price: 490, image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=400', description: 'Papel higiénico suave y resistente.', specificDetails: 'Paquete', category: 'Higiene', department: 'mercado', status: 'available' },
  { id: 14, name: 'Shampoo herbal', price: 1200, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400', description: 'Shampoo con extractos naturales.', specificDetails: 'Botella 400ml', category: 'Higiene', department: 'mercado', status: 'available' },
  
  // Perfumes
  { id: 15, name: 'Perfume floral', price: 3100, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400', description: 'Perfume dulce y moderno con notas frutales.', specificDetails: 'Frasco 50ml', category: 'Perfumes', department: 'mercado', status: 'available' },
  { id: 16, name: 'Desodorante premium', price: 1100, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400', description: 'Desodorante de larga duración.', specificDetails: 'Spray', category: 'Perfumes', department: 'mercado', status: 'available' },
  
  // Bebidas
  { id: 17, name: 'Refresco cola', price: 320, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400', description: 'Refresco refrescante y delicioso.', specificDetails: 'Lata 355ml', category: 'Bebidas', department: 'mercado', status: 'available' },
  { id: 18, name: 'Jugo natural', price: 450, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400', description: 'Jugo 100% natural sin conservantes.', specificDetails: 'Botella 1L', category: 'Bebidas', department: 'mercado', status: 'available' },
  
  // Ropa
  { id: 19, name: 'Camiseta básica', price: 1500, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', description: 'Camiseta 100% algodón, varios colores.', specificDetails: 'Tallas S-XL', category: 'Ropa', department: 'ropa', status: 'available' },
  { id: 20, name: 'Jeans clásico', price: 3500, image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400', description: 'Jeans resistente y cómodo.', specificDetails: 'Tallas 30-40', category: 'Ropa', department: 'ropa', status: 'available' },
  { id: 21, name: 'Vestido veraniego', price: 2800, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', description: 'Vestido ligero y fresco para el verano.', specificDetails: 'Tallas S-L', category: 'Ropa', department: 'ropa', status: 'available' },
  { id: 22, name: 'Zapatos casuales', price: 4500, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', description: 'Zapatos cómodos para el día a día.', specificDetails: 'Tallas 38-44', category: 'Ropa', department: 'ropa', status: 'available' },
  
  // Manualidades
  { id: 23, name: 'Kit de pintura', price: 1200, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400', description: 'Set completo de pinturas acrílicas.', specificDetails: '12 colores', category: 'Manualidades', department: 'manualidades', status: 'available' },
  { id: 24, name: 'Papel craft surtido', price: 800, image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400', description: 'Papel de colores para manualidades.', specificDetails: '50 hojas', category: 'Manualidades', department: 'manualidades', status: 'available' },
  { id: 25, name: 'Tijeras decorativas', price: 650, image: 'https://images.unsplash.com/photo-1581345796538-434e041b9cea?w=400', description: 'Tijeras con diseños para cortar papel.', specificDetails: 'Set 3 piezas', category: 'Manualidades', department: 'manualidades', status: 'available' },
  { id: 26, name: 'Hilos de bordar', price: 450, image: 'https://images.unsplash.com/photo-1605218427306-022ba6c5547c?w=400', description: 'Hilos de colores vibrantes.', specificDetails: '24 madejas', category: 'Manualidades', department: 'manualidades', status: 'available' },
];

export const services: Service[] = [
  {
    id: 1,
    name: 'Barbería El Estilo',
    category: 'Barbería',
    description: 'Cortes modernos, barba, tratamientos capilares. Atención personalizada con los mejores productos.',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=400',
    phone: '+53 5 123 4567',
    location: 'La Habana Vieja',
    rating: 4.8,
    reviews: 124,
    priceRange: '$$',
    availability: 'Lun-Sab 9am-7pm'
  },
  {
    id: 2,
    name: 'Tapicería La Esperanza',
    category: 'Tapicería',
    description: 'Restauración de muebles, cambio de tapicería, reparación de estructuras. Trabajo garantizado.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
    phone: '+53 5 234 5678',
    location: 'Centro Habana',
    rating: 4.9,
    reviews: 89,
    priceRange: '$$$',
    availability: 'Lun-Vie 8am-5pm'
  },
  {
    id: 3,
    name: 'Carpintería El Madero',
    category: 'Carpintería',
    description: 'Muebles a medida, reparaciones, puertas y ventanas. Madera de calidad.',
    image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=400',
    phone: '+53 5 345 6789',
    location: 'Vedado',
    rating: 4.7,
    reviews: 156,
    priceRange: '$$',
    availability: 'Lun-Sab 8am-6pm'
  },
  {
    id: 4,
    name: 'Electricista 24h',
    category: 'Electricidad',
    description: 'Instalaciones eléctricas, reparaciones, emergencias las 24 horas. Servicio rápido y seguro.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400',
    phone: '+53 5 456 7890',
    location: 'Toda La Habana',
    rating: 4.6,
    reviews: 203,
    priceRange: '$',
    availability: '24 horas'
  },
  {
    id: 5,
    name: 'Plomería El Fontanero',
    category: 'Plomería',
    description: 'Reparación de fugas, instalación de sanitarios, destapes. Presupuesto sin compromiso.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400',
    phone: '+53 5 567 8901',
    location: 'La Habana Vieja',
    rating: 4.5,
    reviews: 178,
    priceRange: '$',
    availability: 'Lun-Dom 7am-9pm'
  },
  {
    id: 6,
    name: 'Manicure & Pedicure',
    category: 'Belleza',
    description: 'Uñas acrílicas, gelish, spa de manos y pies. Productos importados.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400',
    phone: '+53 5 678 9012',
    location: 'Vedado',
    rating: 4.9,
    reviews: 234,
    priceRange: '$$',
    availability: 'Mar-Dom 10am-8pm'
  },
  {
    id: 7,
    name: 'Reparación de Electrodomésticos',
    category: 'Reparación',
    description: 'Refrigeradores, lavadoras, aires acondicionados. Técnicos especializados.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400',
    phone: '+53 5 789 0123',
    location: 'Centro Habana',
    rating: 4.4,
    reviews: 145,
    priceRange: '$$',
    availability: 'Lun-Sab 8am-5pm'
  },
  {
    id: 8,
    name: 'Pintura y Decoración',
    category: 'Pintura',
    description: 'Pintura interior y exterior, empapelado, decoración. Acabados profesionales.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400',
    phone: '+53 5 890 1234',
    location: 'Toda La Habana',
    rating: 4.7,
    reviews: 98,
    priceRange: '$$',
    availability: 'Lun-Vie 8am-4pm'
  },
];

export const rentals: Rental[] = [
  {
    id: 1,
    title: 'Casa Colonial en Obispo',
    description: 'Hermosa casa colonial restaurada en pleno corazón de La Habana Vieja. 2 habitaciones, patio interior, terraza con vista a la ciudad.',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400'
    ],
    price: 80,
    location: 'La Habana Vieja',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ['WiFi', 'Aire acondicionado', 'Cocina', 'Terraza', 'Desayuno incluido'],
    phone: '+53 5 111 2222',
    rating: 4.9,
    reviews: 67
  },
  {
    id: 2,
    title: 'Apartamento Moderno en Vedado',
    description: 'Apartamento completamente equipado en el Vedado. Cerca del Malecón y hoteles. Ideal para parejas o ejecutivos.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400'
    ],
    price: 60,
    location: 'Vedado',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['WiFi', 'Aire acondicionado', 'Cocina', 'TV', 'Lavadora'],
    phone: '+53 5 222 3333',
    rating: 4.7,
    reviews: 45
  },
  {
    id: 3,
    title: 'Villa con Piscina en Miramar',
    description: 'Espectacular villa con piscina privada en Miramar. 4 habitaciones, jardín tropical, perfecta para familias o grupos.',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400',
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=400'
    ],
    price: 200,
    location: 'Miramar',
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    amenities: ['Piscina privada', 'WiFi', 'Aire acondicionado', 'Cocina completa', 'Jardín', 'Parking'],
    phone: '+53 5 333 4444',
    rating: 5.0,
    reviews: 32
  },
  {
    id: 4,
    title: 'Habitación Privada en Centro Habana',
    description: 'Habitación cómoda en casa particular. Baño privado, acceso a cocina y sala. Excelente relación calidad-precio.',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400',
      'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?w=400'
    ],
    price: 25,
    location: 'Centro Habana',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['Aire acondicionado', 'Ventilador', 'Baño privado', 'Desayuno opcional'],
    phone: '+53 5 444 5555',
    rating: 4.5,
    reviews: 89
  },
];

export const wholesaleOffers: WholesaleOffer[] = [
  {
    id: 1,
    title: 'Lote de 50 latas de atún',
    description: 'Atún en conserva de excelente calidad. Precio especial para revendedores.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    originalPrice: 25000,
    offerPrice: 20000,
    minQuantity: 50,
    supplier: 'Importadora Caribe',
    phone: '+53 5 999 8888',
    location: 'La Habana',
    validUntil: '2025-03-31',
    category: 'Alimentos'
  },
  {
    id: 2,
    title: 'Mayor de detergentes 100 unidades',
    description: 'Detergente líquido de alta calidad. Envases de 1 litro. Ideal para tiendas.',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400',
    originalPrice: 15000,
    offerPrice: 12000,
    minQuantity: 100,
    supplier: 'Productos del Hogar S.A.',
    phone: '+53 5 888 7777',
    location: 'Centro Habana',
    validUntil: '2025-03-15',
    category: 'Aseo'
  },
  {
    id: 3,
    title: 'Lote de ropa deportiva 30 piezas',
    description: 'Camisetas y shorts deportivos. Varios talles y colores. Marcas reconocidas.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    originalPrice: 45000,
    offerPrice: 36000,
    minQuantity: 30,
    supplier: 'Moda Cubana Mayor',
    phone: '+53 5 777 6666',
    location: 'Vedado',
    validUntil: '2025-04-01',
    category: 'Ropa'
  },
  {
    id: 4,
    title: 'Cajas de jabón 200 unidades',
    description: 'Jabón de tocador de calidad premium. Fragancias variadas.',
    image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=400',
    originalPrice: 30000,
    offerPrice: 24000,
    minQuantity: 200,
    supplier: 'Jabonería La Habana',
    phone: '+53 5 666 5555',
    location: 'La Habana Vieja',
    validUntil: '2025-03-20',
    category: 'Higiene'
  },
];

export const categories = ['Todos', 'Alimentos', 'Snacks', 'Salsas', 'Higiene', 'Perfumes', 'Bebidas', 'Ropa', 'Manualidades'];

export const serviceCategories = ['Todos', 'Barbería', 'Tapicería', 'Carpintería', 'Electricidad', 'Plomería', 'Belleza', 'Reparación', 'Pintura'];

export const rentalLocations = ['Todos', 'La Habana Vieja', 'Centro Habana', 'Vedado', 'Miramar'];
