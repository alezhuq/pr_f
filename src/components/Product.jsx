import React from "react";
import "../styles/product.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Product = ({ name, id, price, description, imageUrl, ingredients }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={imageUrl} alt={name} className="image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Ціна: ${price}</p>
      <p>Склад: </p>
      {ingredients.map((ingredient) => (
        <p>{ingredient}</p>
      ))}
      <Button variant="contained" color="primary">
        Придбати
      </Button>
    </div>
  );
};

export default Product;
