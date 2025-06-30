import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - ShoesStore</title>
        <meta name="description" content="Conheça a história da ShoesStore, nossa missão, visão e valores. Somos apaixonados por calçados e por nossos clientes." />
      </Helmet>
      <div className="fade-in">
        <section className="hero-gradient py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-black mb-4"
            >
              Nossa História
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 max-w-3xl mx-auto"
            >
              Movidos pela paixão por calçados que unem design, conforto e qualidade.
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500"
                  alt="Loja de calçados moderna"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-black mb-6">Quem Somos</h2>
                <p className="text-gray-600 mb-4">
                  A ShoesStore nasceu do sonho de oferecer uma experiência de compra única para amantes de calçados. Desde 2020, selecionamos cuidadosamente cada par, buscando sempre o equilíbrio perfeito entre as últimas tendências da moda e o conforto essencial para o dia a dia.
                </p>
                <p className="text-gray-600">
                  Acreditamos que o calçado certo pode transformar um look e aumentar a autoestima. Por isso, nossa equipe está sempre em busca de novidades e de marcas que compartilham nossos valores de qualidade, estilo e sustentabilidade.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-light-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-3">Nossa Missão</h3>
                <p className="text-gray-700">Oferecer calçados de alta qualidade que combinem estilo e conforto, proporcionando a melhor experiência de compra para nossos clientes.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-3">Nossa Visão</h3>
                <p className="text-gray-700">Ser a principal referência em loja de calçados online no Brasil, reconhecida pela excelência em produtos, atendimento e inovação.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-3">Nossos Valores</h3>
                <p className="text-gray-700">Paixão por calçados, compromisso com o cliente, qualidade inegociável, inovação constante e integridade em todas as ações.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;