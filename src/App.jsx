import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster.jsx';
import { useCart } from '@/hooks/useCart.js';
import { useFavorites } from '@/hooks/useFavorites.js';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ShoppingCart from '@/components/ShoppingCart.jsx';
import FavoritesModal from '@/components/FavoritesModal.jsx';
import QuickViewModal from '@/components/QuickViewModal.jsx';

import HomePage from '@/pages/HomePage.jsx';
import CatalogPage from '@/pages/CatalogPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleAddToCart = (product, size) => {
    addToCart(product, 1, size);
    if (quickViewProduct) {
      setQuickViewProduct(null);
    }
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onFavoritesClick={() => setIsFavoritesOpen(true)}
        cartCount={cartCount}
        favoritesCount={favorites.length}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={
            <CatalogPage 
              onAddToCart={handleAddToCart}
              onToggleFavorite={toggleFavorite}
              onQuickView={setQuickViewProduct}
              isFavorite={isFavorite}
            />
          } />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
        cartTotal={cartTotal}
      />

      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onAddToCart={handleAddToCart}
      />

      <Toaster />
    </div>
  );
}

export default App;