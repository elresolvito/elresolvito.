import { useState, useMemo } from 'react';
import { ShoppingCart, Heart, Filter } from 'lucide-react';
import { products, categories } from '@/data';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/types';

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart, toggleFavorite, isFavorite } = useApp();

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Productos</h2>
            <p className="text-gray-600">Encuentra todo lo que necesitas para tu hogar</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            <span>{filteredProducts.length} productos</span>
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

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isFavorite(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/90 text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                </button>
                <Badge className="absolute top-3 left-3 bg-[#0d3b33]/90 text-white text-xs">
                  {product.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 
                  className="font-semibold text-gray-900 mb-1 line-clamp-1 cursor-pointer hover:text-[#0d3b33] transition-colors"
                  onClick={() => setSelectedProduct(product)}
                >
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-1">{product.specificDetails}</p>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#0d3b33]">${product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-10 h-10 bg-[#0d3b33] text-white rounded-xl flex items-center justify-center hover:bg-[#0a2e28] hover:scale-110 transition-all duration-200"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-lg">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProduct.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Badge className="mb-2">{selectedProduct.category}</Badge>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      <span className="font-medium">Detalles:</span> {selectedProduct.specificDetails}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-3xl font-bold text-[#0d3b33]">${selectedProduct.price}</span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => toggleFavorite(selectedProduct.id)}
                        className={isFavorite(selectedProduct.id) ? 'text-red-500' : ''}
                      >
                        <Heart className={`w-4 h-4 mr-2 ${isFavorite(selectedProduct.id) ? 'fill-current' : ''}`} />
                        {isFavorite(selectedProduct.id) ? 'Guardado' : 'Guardar'}
                      </Button>
                      <Button 
                        onClick={() => {
                          handleAddToCart(selectedProduct);
                          setSelectedProduct(null);
                        }}
                        className="btn-primary"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Agregar
                      </Button>
                    </div>
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
