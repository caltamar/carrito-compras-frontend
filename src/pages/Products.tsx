import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api";
import { useCart } from "../context/CartContext";
import { Card, CardContent, Typography, Button, Container, Grid, Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const Products = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { addProduct } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAddToCart = (product: number) => {
    addProduct(product);
    setOpenSnackbar(true); // Muestra la alerta
  };

  if (isLoading) return <Typography variant="h5" align="center">Cargando productos...</Typography>;

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🛒 Productos
      </Typography>
      <Grid container spacing={3}>
        {Array.isArray(products) && products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ textAlign: "center", p: 3, bgcolor: "background.paper" }}>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">${product.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(product.id)}
                  sx={{ mt: 2 }}
                >
                  Agregar al carrito 🛍️
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000} // Se oculta en 2 segundos
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
          Producto agregado con éxito! 🎉
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Products;
