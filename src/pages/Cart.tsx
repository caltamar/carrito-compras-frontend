import { useCart } from "../context/CartContext";
import { Container, Typography, Card, CardContent, Button, List, ListItem, ListItemText } from "@mui/material";

const Cart = () => {
  const { cart, emptyCart } = useCart();

  console.log("Contenido del carrito:", cart); // Verifica que cart es un array de productos

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🛍️ Carrito de Compras
      </Typography>

      {Array.isArray(cart) && cart.length > 0 ? ( // Verifica si cart es un array con elementos
        <Card sx={{ maxWidth: 600, mx: "auto", p: 3, bgcolor: "background.paper" }}>
          <CardContent>
            <List>
              {cart.map((item, index) => (
                <ListItem key={index} divider>
                  <ListItemText primary={item.name} secondary={`$${item.price}`} />
                </ListItem>
              ))}
            </List>

            <Button
              variant="contained"
              color="secondary"
              onClick={emptyCart}
              sx={{ mt: 2, width: "100%" }}
            >
              Vaciar Carrito ❌
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" align="center">
          Tu carrito está vacío 🛒
        </Typography>
      )}
    </Container>
  );
};

export default Cart;
