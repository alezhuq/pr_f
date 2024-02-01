import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./components/Footer";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import RegisterPage from "./Pages/Registration";
import ProductsFull from "./Pages/ProductsFull";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/product/:id/"
          element={
            <React.Suspense>
              <ProductDetails />
            </React.Suspense>
          }
        />

        <Route
          path="/"
          element={
            <React.Suspense>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="product/"
          element={
            <React.Suspense>
              <ProductsPage />
            </React.Suspense>
          }
        />
        <Route
          path="account/"
          element={
            <React.Suspense>
              <Account />
            </React.Suspense>
          }
        />
        <Route
          path="login/"
          element={
            <React.Suspense>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="products/"
          element={
            <React.Suspense>
              <ProductsFull />
            </React.Suspense>
          }
        />
        <Route
          path="registration/"
          element={
            <React.Suspense>
              <RegisterPage />
            </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
