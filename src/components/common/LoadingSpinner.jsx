import React from 'react';
import { Helmet } from 'react-helmet';

const LoadingSpinner = () => (
  <div className="min-h-screen bg-white">
    <Helmet>
      <title>Carregando... - Catálogo de Calçados</title>
      <meta name="description" content="Carregando o melhor catálogo de calçados online" />
    </Helmet>
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="loading-shimmer w-16 h-16 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600">Carregando catálogo...</p>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;