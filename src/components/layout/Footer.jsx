import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="text-2xl font-bold">ShoesStore</span>
          <p className="mt-4 text-gray-400">
            Sua loja online de calçados com os melhores produtos e preços do mercado.
          </p>
        </div>
        
        <div>
          <span className="font-semibold text-lg">Categorias</span>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Tênis Esportivos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sapatos Sociais</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Calçados Femininos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Calçados Casuais</a></li>
          </ul>
        </div>
        
        <div>
          <span className="font-semibold text-lg">Atendimento</span>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Frete Grátis</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>
        
        <div>
          <span className="font-semibold text-lg">Conecte-se</span>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 ShoesStore. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;