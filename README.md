# 🛒 Carrito de Compras - Frontend (React)

Este proyecto es la implementación del frontend para el carrito de compras, desarrollado con **React + TypeScript**. La aplicación permite listar productos, agregar productos al carrito, optimizar compras dentro de un presupuesto y restablecer productos mediante el consumo de una API en Ruby on Rails.

---

##  **Tecnologías Utilizadas**
- **React 18 + Vite**
- **TypeScript**
- **React Router** (para la navegación)

---

##  **Requisitos Previos**
Antes de ejecutar el proyecto, asegúrate de tener instalado:
- **Node.js** (versión 18 o superior)
- **npm** (versión 9 o superior)
- **Un backend funcional en Ruby on Rails**

---

## **Instalación y Configuración**
###  **Clonar el Repositorio**
```sh
git clone https://github.com/caltamar/carrito-compras-frontend.git
cd carrito-compras-frontend
```

###  **Instalar Dependencias**
```sh
npm install
```

### **Configurar la URL de la API**
Abre el archivo `src/services/api.ts` y actualiza la constante `API_BASE_URL` con la URL de tu backend en Render:

```tsx
const API_BASE_URL = "https://tu-api-render.com/api/v1";
```

---

## **Ejecutar el Proyecto en Desarrollo**
```sh
npm run dev
```
La aplicación estará disponible en **http://localhost:5173**.

---

## **Estructura del Proyecto**
📁 `src/`
- 📂 `components/` → Componentes reutilizables.
- 📂 `pages/` → Páginas principales (Productos, Carrito, Optimización, Admin).
- 📂 `services/` → Funciones para consumir la API con Axios.
- 📂 `utils/` → Funciones auxiliares (como la optimización de compras).
- 📄 `App.tsx` → Configuración de rutas y navegación.
- 📄 `main.tsx` → Punto de entrada de la aplicación.

---

## 🛠 **Funcionalidades**
✅ **Listar productos desde la API**.
✅ **Agregar productos al carrito**.
✅ **Optimizar compras dentro de un presupuesto**.
✅ **Restablecer productos a los valores iniciales**.

---

