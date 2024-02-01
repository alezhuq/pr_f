import "../styles/ProductsPage.css"; // Import the CSS file for styling\
import React from "react";
import Product from "../components/Product";
import styled from "@emotion/styled";
import tablets from "../assets/tablets.png";
const Wrapper = styled.div`
  min-height: calc(100vh - 170px);
`;
const Container = styled.div`
  max-width: 1360px;
  padding: 0 30px;
  margin: 0 auto;
`;
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;
const Inputs = styled.div`
  display: flex;
  padding-top: 40px;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;
const products = [
  {
    id: 1,
    name: "Продукт 1",
    price: "19.99",
    description: "Опис продукту 1",
    imageUrl: tablets,
    ingredients: ["кальцій", "магній"],
  },
  {
    id: 2,
    name: "Продукт 2",
    price: "29.99",
    description: "Опис продукту 2",
    imageUrl: tablets,
    ingredients: ["кальцій", "магній"],
  },
  {
    id: 3,
    name: "Продукт 3",
    price: "19.99",
    description: "Опис продукту 3",
    imageUrl: tablets,
    ingredients: ["кальцій", "магній"],
  },
  {
    id: 4,
    name: "Продукт 4",
    price: "29.99",
    description: "Опис продукту 4",
    imageUrl: tablets,
    ingredients: ["кальцій", "магній"],
  },
  {
    id: 5,
    name: "Продукт 5",
    price: "29.99",
    description: "Опис продукту 5",
    imageUrl: tablets,
    ingredients: ["кальцій", "магній"],
  },
  {
    id: 6,
    name: "Продукт 6",
    price: "29.99",
    description: "Опис продукту 6",
    imageUrl: tablets,
    ingredients: ["кальцій", "магній"],
  },
  {
    id: 7,
    name: "Продукт 7",
    price: "29.99",
    description: "Опис продукту 7",
    imageUrl: tablets,
    ingredients: ["кальцій", "магній"],
  },
];

const ProductsFull = () => {
  return (
    <Wrapper>
      <Container>
        <ProductsGrid>
          {products.map((product) => (
            <Product
              key={product.id}
              imageUrl={product.imageUrl}
              price={product.price}
              description={product.description}
              name={product.name}
              ingredients={product.ingredients}
              id={product.id}
            />
          ))}
        </ProductsGrid>
      </Container>
    </Wrapper>
  );
};
export default ProductsFull;
