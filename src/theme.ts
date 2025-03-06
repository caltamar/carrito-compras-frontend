import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Tema oscuro por defecto
    primary: {
      main: "#007bff", // Azul principal
    },
    secondary: {
      main: "#ff9800", // Naranja
    },
    background: {
      default: "#1e1e1e",
      paper: "#282c34",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
});

export default theme;
