import { useLocalStorage } from '@/hooks/useLocalStorage.js';
import { useToast } from '@/components/ui/use-toast.js';

export function useCart() {
  const [cart, setCart] = useLocalStorage('cart', []);
  const { toast } = useToast();

  const addToCart = (product, quantity = 1, size) => {
    if (!size) {
      toast({
        title: "Tamanho não selecionado",
        description: "Por favor, selecione um tamanho antes de adicionar ao carrinho.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
  
    const cartId = `${product.id}-${size}`;

    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.cartId === cartId);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity, size, cartId }];
      }
    });
    toast({
      title: "Produto adicionado!",
      description: `${product.name} (Tamanho: ${size}) foi adicionado ao carrinho.`,
      duration: 3000,
    });
  };

  const removeFromCart = (cartId) => {
    setCart(prevCart => prevCart.filter(item => item.cartId !== cartId));
    toast({
      title: "Produto removido",
      description: "O produto foi removido do seu carrinho.",
      variant: "destructive",
      duration: 3000,
    });
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.cartId === cartId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Carrinho limpo",
      description: "Todos os produtos foram removidos do carrinho.",
      duration: 3000,
    });
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount };
}