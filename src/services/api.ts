import axios from "axios";

const API_BASE_URL = "https://carrito-compras-api.onrender.com/api/v1";

// Obtener productos
export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

// Agregar producto al carrito
export const addToCart = async (productId: number) => {
  await axios.post(`${API_BASE_URL}/cart/${productId}`);
};

// Obtener carrito
export const fetchCart = async () => {
    const response = await axios.get(`${API_BASE_URL}/cart`);
    return response.data.cart ?? [];
};

// Vaciar carrito
export const clearCart = async () => {
  await axios.delete(`${API_BASE_URL}/cart`);
};