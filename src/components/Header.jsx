import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Header = ({ onCartClick, onFavoritesClick, cartCount, favoritesCount }) => {
  const navLinkClass = ({ isActive }) =>
    `text-gray-700 hover:text-black transition-colors ${isActive ? 'font-bold text-black' : ''}`;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-black">ShoesStore</h1>
            <span className="text-sm text-gray-500 hidden sm:block">Catálogo Premium</span>
          </NavLink>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>Início</NavLink>
            <NavLink to="/catalogo" className={navLinkClass}>Catálogo</NavLink>
            <NavLink to="/sobre" className={navLinkClass}>Sobre</NavLink>
            <NavLink to="/contato" className={navLinkClass}>Contato</NavLink>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={onFavoritesClick} className="relative">
              <Heart className="h-5 w-5" />
              {favoritesCount > 0 && (
                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">{favoritesCount}</span>
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={onCartClick} className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-black text-white text-xs flex items-center justify-center">{cartCount}</span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;