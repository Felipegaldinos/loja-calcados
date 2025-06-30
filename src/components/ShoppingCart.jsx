import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from '@/components/ui/sheet.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Separator } from '@/components/ui/separator.jsx';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.js';

const ShoppingCart = ({ isOpen, onClose, cart, onUpdateQuantity, onRemoveFromCart, onClearCart, cartTotal }) => {
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Finalizar Compra",
      description: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Seu Carrinho</SheetTitle>
        </SheetHeader>
        {cart.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <p className="text-lg text-gray-600">Seu carrinho está vazio.</p>
            <p className="text-sm text-gray-400 mt-2">Adicione produtos para vê-los aqui.</p>
            <SheetClose asChild>
              <Button className="mt-4">Continuar comprando</Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto -mx-6 px-6">
              {cart.map(item => (
                <div key={item.cartId} className="flex items-center gap-4 py-4">
                  <img  className="w-20 h-20 object-cover rounded-md" alt={item.name} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="flex-grow">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Tamanho: {item.size}</p>
                    <p className="text-sm text-gray-500">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => onRemoveFromCart(item.cartId)}>
                    <Trash2 className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              ))}
            </div>
            <SheetFooter className="mt-auto">
              <div className="w-full">
                <Separator className="my-4" />
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Subtotal</span>
                  <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Frete e taxas serão calculados no checkout.</p>
                <Button className="w-full mt-4" onClick={handleCheckout}>Finalizar Compra</Button>
                <Button variant="outline" className="w-full mt-2" onClick={onClearCart}>Limpar Carrinho</Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;