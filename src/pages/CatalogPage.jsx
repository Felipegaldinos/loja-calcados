import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Filters from '@/components/Filters.jsx';
import ProductGrid from '@/components/ProductGrid.jsx';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';
import { mockProducts } from '@/data/products.js';

const CatalogPage = ({ onAddToCart, onToggleFavorite, onQuickView, isFavorite }) => {
  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let tempProducts = [...products];

      if (selectedCategory !== 'todos') {
        tempProducts = tempProducts.filter(p => p.category === selectedCategory);
      }

      if (searchTerm) {
        tempProducts = tempProducts.filter(p =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      tempProducts.sort((a, b) => {
        switch (sortBy) {
          case 'price-low': return a.price - b.price;
          case 'price-high': return b.price - a.price;
          case 'rating': return b.rating - a.rating;
          default: return a.name.localeCompare(b.name);
        }
      });
      
      setFilteredProducts(tempProducts);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [products, selectedCategory, searchTerm, sortBy]);

  return (
    <>
      <Helmet>
        <title>Catálogo - ShoesStore</title>
        <meta name="description" content="Explore nosso catálogo completo de calçados. Encontre tênis, sapatos, sandálias e mais." />
      </Helmet>
      
      <div className="fade-in">
        <section className="hero-gradient py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Nosso Catálogo</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">Encontre o calçado ideal para você. Use os filtros para refinar sua busca.</p>
            </div>
        </section>

        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedCategory={selectedCategory}
          handleCategoryChange={setSelectedCategory}
        />
        
        {isLoading ? <LoadingSpinner /> : (
          <ProductGrid
            products={filteredProducts}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            onQuickView={onQuickView}
            isFavorite={isFavorite}
            selectedCategory={selectedCategory}
          />
        )}
      </div>
    </>
  );
};

export default CatalogPage;