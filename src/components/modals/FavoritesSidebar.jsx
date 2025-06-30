import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag } from 'lucide-react';

const FavoritesSidebar = ({ isOpen, onClose, favoriteItems, onRemoveFavorite, onAddToCart }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl">Seus Favoritos</SheetTitle>
        </SheetHeader>
        {favoriteItems.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Você ainda não tem favoritos.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto -mx-6 px-6">
            <div className="divide-y divide-gray-200">
              {favoriteItems.map(item => (
                <div key={item.id} className="py-4 flex gap-4">
                  <img  className="w-24 h-24 object-cover rounded-md" alt={item.name} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <Button variant="outline" size="sm" onClick={() => { onAddToCart(item); onClose(); }}>
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Adicionar
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500" onClick={() => onRemoveFavorite(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default FavoritesSidebar;