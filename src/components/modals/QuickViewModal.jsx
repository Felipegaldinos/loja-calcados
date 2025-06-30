import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Star, ShoppingBag } from 'lucide-react';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[825px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              className="w-full h-auto object-cover rounded-lg"
              alt={`Imagem do produto ${product.name}`}
             src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
          </div>
          <div>
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold">{product.name}</DialogTitle>
              <DialogDescription className="text-base text-gray-500 pt-2">
                {product.description}
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2 my-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-md font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-md text-gray-500">({product.reviews} avaliações)</span>
            </div>
            <div className="flex items-center gap-3 my-4">
              <span className="text-3xl font-bold text-black">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            <Button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-black hover:bg-gray-800 text-white py-6 text-lg rounded-lg transition-colors"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;