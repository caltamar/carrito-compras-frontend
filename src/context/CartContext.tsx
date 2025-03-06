import { createContext, useContext, useState, useEffect } from "react";
import { fetchCart, addToCart, clearCart } from "../services/api";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartContextProps {
  cart: Product[];
  addProduct: (productId: number) => void;
  emptyCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    // Cargar carrito desde localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    fetchCart().then((data) => {
      setCart(data);
      localStorage.setItem("cart", JSON.stringify(data)); // Guardar en localStorage
    });
  }, []);

  const addProduct = async (productId: number) => {
    await addToCart(productId);
    const updatedCart = await fetchCart();
    console.log("Agregando producto:", productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardar en localStorage
  };

  const emptyCart = async () => {
    await clearCart();
    setCart([]);
    localStorage.removeItem("cart"); // Eliminar del localStorage
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe estar dentro de CartProvider");
  return context;
};
