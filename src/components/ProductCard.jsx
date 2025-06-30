import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ProductCard = ({ product, onAddToCart, onToggleFavorite, onQuickView, isFavorite, index }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card bg-white rounded-xl overflow-hidden shadow-sm flex flex-col"
    >
      <div className="relative group">
        <img 
          className="w-full h-64 object-cover"
          alt={`Imagem do produto ${product.name}`}
         src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-medium">
              Novo
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Oferta
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onToggleFavorite(product)}
            className={`p-2 rounded-full transition-colors ${
              isFavorite
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className="h-4 w-4" />
          </button>
          <button
            onClick={() => onQuickView(product)}
            className="p-2 bg-white text-gray-600 hover:text-black rounded-full transition-colors"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h4 className="font-semibold text-lg text-black mb-2 line-clamp-2">
          {product.name}
        </h4>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews} avaliações)</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-black">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
        
        <div className="mt-auto">
          <div className="mb-4">
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
            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-colors"
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;