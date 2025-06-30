import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl">Seu Carrinho</SheetTitle>
        </SheetHeader>
        {cartItems.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto -mx-6 px-6">
            <div className="divide-y divide-gray-200">
              {cartItems.map(item => (
                <div key={item.id} className="py-4 flex gap-4">
                  <img  className="w-24 h-24 object-cover rounded-md" alt={item.name} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-2">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500" onClick={() => onRemoveItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {cartItems.length > 0 && (
          <SheetFooter className="border-t pt-6">
            <div className="w-full space-y-4">
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <Button className="w-full bg-black text-white py-3">Finalizar Compra</Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;