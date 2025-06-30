import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { useToast } from '@/components/ui/use-toast.js';
import { Phone, Mail, MapPin } from 'lucide-react';


const ContactPage = () => {
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "Mensagem Enviada!",
            description: "Agradecemos o seu contato. Responderemos em breve! (Esta é uma demonstração)",
            duration: 5000,
        });
        e.target.reset();
    };


  return (
    <>
      <Helmet>
        <title>Contato - ShoesStore</title>
        <meta name="description" content="Fale conosco! Envie sua mensagem, dúvida ou sugestão para a ShoesStore. Estamos aqui para te ajudar." />
      </Helmet>
      <div className="fade-in">
        <section className="hero-gradient py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-black mb-4">
                Fale Conosco
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-700 max-w-2xl mx-auto">
                Tem alguma dúvida ou sugestão? Adoraríamos ouvir você.
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-light-beige p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-black mb-6">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" type="text" placeholder="Seu nome completo" required />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu.email@exemplo.com" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Sua Mensagem</Label>
                    <Textarea id="message" placeholder="Escreva sua dúvida ou sugestão aqui..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" size="lg">Enviar Mensagem</Button>
                </form>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Nossas Informações</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-black" />
                      <span className="text-gray-700">contato@shoesstore.com</span>
                    </div>
                     <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-black" />
                      <span className="text-gray-700">(11) 99999-8888</span>
                    </div>
                     <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-black mt-1" />
                      <span className="text-gray-700">Av. Principal, 123, Sala 45 <br/> São Paulo, SP - Brasil</span>
                    </div>
                  </div>
                </div>
                 <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Horário de Atendimento</h3>
                  <p className="text-gray-700">Segunda a Sexta: 9h às 18h</p>
                   <p className="text-gray-700">Sábado: 9h às 13h</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;