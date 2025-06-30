import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="hero-gradient py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
          Catálogo de Calçados
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Descubra nossa coleção exclusiva com os melhores calçados para todas as ocasiões
        </p>
      </motion.div>
    </div>
  </section>
);

export default Hero;