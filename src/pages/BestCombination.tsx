import { useState, useEffect } from "react";
import { findBestCombination } from "../utils/findBestCombination";
import { fetchProducts } from "../services/api"; // Importamos la función que obtiene productos de la API
import { Container, Typography, Card, CardContent, Button, List, ListItem, ListItemText, TextField } from "@mui/material";

interface Product {
  id: number;
  name: string;
  price: number;
}

const BestCombination = () => {
  const [budget, setBudget] = useState<number>(150);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  // 🔥 Cargar productos desde la API al montar el componente
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data); // Guardamos la lista de productos en el estado
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    loadProducts();
  }, []);

  const handleCalculate = () => {
    const bestCombination = findBestCombination(products, budget);
    setSelectedProducts(bestCombination);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🛍️ Optimización de Compras
      </Typography>

      <Card sx={{ maxWidth: 600, mx: "auto", p: 3, bgcolor: "background.paper" }}>
        <CardContent>
          <TextField
            label="Presupuesto ($)"
            type="number"
            fullWidth
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            sx={{ width: "100%", mb: 2 }}
          >
            Calcular Mejor Combinación
          </Button>

          {selectedProducts.length > 0 ? (
            <List>
              {selectedProducts.map((item) => (
                <ListItem key={item.id} divider>
                  <ListItemText primary={item.name} secondary={`$${item.price}`} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography align="center">No hay productos seleccionados.</Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default BestCombination;
