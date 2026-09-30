import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";

import { CartProvider } from "./contex/CartContex";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;