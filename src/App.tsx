import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import BestCombination from "./pages/BestCombination";

function App() {
  return (
    <CartProvider>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              🛒 Mi Tienda
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Productos
            </Button>
            <Button color="inherit" component={Link} to="/cart">
              Carrito
            </Button>
            <Button color="inherit" component={Link} to="/best-combination">
              Optimización
            </Button>
          </Toolbar>
        </AppBar>

        <Container>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/best-combination" element={<BestCombination />} />
          </Routes>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
