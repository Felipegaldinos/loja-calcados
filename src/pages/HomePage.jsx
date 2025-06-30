import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Star, Truck, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero.jsx';

const HomePage = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-black" />,
      title: 'Frete Grátis',
      description: 'Em todos os pedidos acima de R$199 para todo o Brasil.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-black" />,
      title: 'Compra Segura',
      description: 'Seus dados protegidos com a melhor tecnologia de segurança.',
    },
    {
      icon: <Star className="h-8 w-8 text-black" />,
      title: 'Qualidade Premium',
      description: 'Calçados feitos com materiais de alta qualidade para durar.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>ShoesStore - Sua Loja de Calçados Online</title>
        <meta name="description" content="Bem-vindo à ShoesStore! Encontre os melhores calçados com estilo, conforto e qualidade. Frete grátis e compra segura." />
      </Helmet>
      
      <div className="fade-in">
        <Hero />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-light-beige py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black mb-4">Nossas Categorias</h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-10">
                Explore nossa variedade de calçados, desenhados para cada momento da sua vida.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <CategoryCard
                title="Esportivo"
                imgSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ab?w=500"
                altText="Tênis de corrida vermelho"
                description="Performance e conforto"
              />
              <CategoryCard
                title="Casual"
                imgSrc="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500"
                altText="Tênis casual feminino"
                description="Estilo para o dia a dia"
              />
              <CategoryCard
                title="Social"
                imgSrc="https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500"
                altText="Sapatos sociais de couro"
                description="Elegância e sofisticação"
              />
               <CategoryCard
                title="Feminino"
                imgSrc="https://images.unsplash.com/photo-1539109136881-3be0616f4951?w=500"
                altText="Sandálias femininas de salto"
                description="Charme e versatilidade"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Pronto para encontrar seu par perfeito?</h2>
            <p className="text-gray-700 mb-8">
              Navegue pelo nosso catálogo completo e descubra as últimas tendências e os clássicos atemporais.
            </p>
            <Link to="/catalogo">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                Explorar Catálogo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

const CategoryCard = ({ title, description, imgSrc, altText }) => (
  <Link to="/catalogo" className="group block">
    <div className="relative overflow-hidden rounded-lg category-card">
      <img
        src={imgSrc}
        alt={altText}
        className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 text-center">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-beige">{description}</p>
      </div>
    </div>
  </Link>
);


export default HomePage;