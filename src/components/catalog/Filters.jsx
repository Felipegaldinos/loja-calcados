import React from 'react';
import { Search, Filter } from 'lucide-react';
import { categories } from '@/data/products';

const Filters = ({ searchTerm, onSearchChange, sortBy, onSortChange, selectedCategory, onCategoryChange }) => (
  <section className="bg-light-beige py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="relative flex-1 w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar calçados..."
            value={searchTerm}
            onChange={onSearchChange}
            className="search-input w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black bg-white"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <select
            value={sortBy}
            onChange={onSortChange}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black bg-white"
          >
            <option value="name">Ordenar por Nome</option>
            <option value="price-low">Menor Preço</option>
            <option value="price-high">Maior Preço</option>
            <option value="rating">Melhor Avaliação</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`filter-button px-6 py-3 rounded-full border transition-all ${
                selectedCategory === category.id
                  ? 'active'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-black'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Filters;