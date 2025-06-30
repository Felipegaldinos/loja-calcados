import { useLocalStorage } from '@/hooks/useLocalStorage.js';
import { useToast } from '@/components/ui/use-toast.js';

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const { toast } = useToast();

  const toggleFavorite = (product) => {
    const isFavorite = favorites.some(fav => fav.id === product.id);
    if (isFavorite) {
      setFavorites(prev => prev.filter(fav => fav.id !== product.id));
      toast({
        title: "Removido dos favoritos",
        description: `${product.name} foi removido da sua lista de desejos.`,
        duration: 3000,
      });
    } else {
      setFavorites(prev => [...prev, product]);
      toast({
        title: "Adicionado aos favoritos!",
        description: `${product.name} foi adicionado à sua lista de desejos.`,
        duration: 3000,
      });
    }
  };

  const isFavorite = (productId) => favorites.some(fav => fav.id === productId);

  return { favorites, toggleFavorite, isFavorite };
}