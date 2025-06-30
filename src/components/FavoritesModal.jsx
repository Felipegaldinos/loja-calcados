import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast.js';

const FavoritesModal = ({ isOpen, onClose, favorites, onToggleFavorite, onAddToCart }) => {
  const { toast } = useToast();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Sua Lista de Desejos</DialogTitle>
          <DialogDescription>
            Seus produtos favoritos. Adicione-os ao carrinho!
          </DialogDescription>
        </DialogHeader>
        {favorites.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600">Sua lista de desejos está vazia.</p>
            <p className="text-sm text-gray-400 mt-2">Clique no coração dos produtos para adicioná-los.</p>
          </div>
        ) : (
          <div className="max-h-[60vh] overflow-y-auto -mx-6 px-6">
            {favorites.map(product => (
              <div key={product.id} className="flex items-center gap-4 py-4 border-b last:border-b-0">
                <img  className="w-20 h-20 object-cover rounded-md" alt={product.name} src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                <div className="flex-grow">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-lg font-bold text-black">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={() => { 
                      onClose(); 
                      toast({
                        title: "Selecione o tamanho",
                        description: "Vá para a página do produto ou catálogo para selecionar o tamanho.",
                        duration: 4000
                      });
                    }}>Ver no Catálogo</Button>
                  <Button variant="ghost" size="icon" onClick={() => onToggleFavorite(product)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FavoritesModal;