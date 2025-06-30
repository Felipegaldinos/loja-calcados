import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Star } from 'lucide-react';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img 
              className="w-full h-auto object-cover rounded-lg"
              alt={`Imagem do produto ${product.name}`}
             src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
          </div>
          <div className="flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-2xl text-left">{product.name}</DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-2 my-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({product.reviews} avaliações)</span>
            </div>
            <DialogDescription className="text-left text-base text-gray-600 flex-grow">
              {product.description}
            </DialogDescription>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-3xl font-bold text-black">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-md text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
             <div className="mt-4">
              <span className="text-sm font-medium text-gray-700">Tamanho:</span>
              <div className="flex gap-2 mt-2">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-9 w-9 flex items-center justify-center rounded-md border text-sm transition-colors ${
                      selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'bg-white hover:bg-gray-100 border-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <Button
              onClick={() => onAddToCart(product, selectedSize)}
              className="w-full mt-4 bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-colors"
            >
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;