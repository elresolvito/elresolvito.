import { Plus, Minus, ShoppingCart, Trash2, MessageCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useApp();

  const generateWhatsAppMessage = () => {
    const items = cart.map(item => 
      `• ${item.product.name} x${item.quantity} - $${item.product.price * item.quantity}`
    ).join('\n');
    
    return `¡Hola! Quiero hacer un pedido:\n\n${items}\n\nTotal: $${cartTotal}\n\nPor favor confirmen disponibilidad. ¡Gracias!`;
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/+5351234567?text=${message}`, '_blank');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Tu Carrito
            {cart.length > 0 && (
              <span className="text-sm font-normal text-gray-500">
                ({cart.length} productos)
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Tu carrito está vacío
            </h3>
            <p className="text-gray-500 mb-6">
              Agrega productos y aparecerán aquí
            </p>
            <Button onClick={() => setIsCartOpen(false)} className="btn-primary">
              Seguir comprando
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 bg-gray-50 rounded-xl"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.product.specificDetails}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-[#0d3b33]">
                          ${item.product.price * item.quantity}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors self-start"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 mt-4 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold text-gray-700">Total:</span>
                <span className="font-bold text-2xl text-[#0d3b33]">${cartTotal}</span>
              </div>
              
              <Button
                onClick={handleWhatsAppOrder}
                className="w-full btn-accent"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir por WhatsApp
              </Button>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsCartOpen(false)}
                  className="flex-1"
                >
                  Seguir comprando
                </Button>
                <Button
                  variant="ghost"
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
