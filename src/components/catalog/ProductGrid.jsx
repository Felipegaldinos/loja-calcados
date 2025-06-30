import React from 'react';
import ProductCard from './ProductCard';
import { categories } from '@/data/products';

const ProductGrid = ({ products, onAddToCart, onToggleFavorite, onQuickView, favorites, selectedCategory }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
        <p className="text-gray-400 mt-2">Tente ajustar os filtros ou termo de busca</p>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-black mb-2">
            {selectedCategory === 'todos' ? 'Todos os Produtos' : categories.find(c => c.id === selectedCategory)?.name}
          </h3>
          <p className="text-gray-600">
            {products.length} produto{products.length !== 1 ? 's' : ''} encontrado{products.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              onQuickView={onQuickView}
              isFavorite={favorites.includes(product.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;