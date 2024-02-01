import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import tablet from "../assets/tablets.png";
import styled from "@emotion/styled";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";

const Wrapper = styled.div`
  min-height: calc(100vh - 200px);
`;
const Container = styled.div`
  max-width: 1360px;
  padding: 0 30px;
  margin: 0 auto;
`;
const Image = styled.img`
  object-fit: cover;
  width: 400px;
  height: 600px;
  padding: 20px;
  @media (max-width: 1200px) {
    width: 300px;
    height: 500px;
  }
  @media (max-width: 850px) {
    width: 200px;
    height: 400px;
  }
  @media (max-width: 600px) {
    width: 150px;
    height: 300px;
  }
`;
const InnerContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const productDetails = [
  {
    id: 1,
    name: "Продукт 1",
    description: "Опис продукту 1",
    price: 19.99,
    ingredients: ["кальцій", "магній"],
  },
  {
    id: 2,
    name: "Продукт 2",
    description: "Опис продукту 2",
    price: 29.99,
    ingredients: ["кальцій", "магній"],
  },
  {
    id: 3,
    name: "Продукт 3",
    description: "Опис продукту 3",
    price: 39.99,
    ingredients: ["кальцій", "магній"],
  },
  {
    id: 4,
    name: "Продукт 4",
    description: "Опис продукту 4",
    price: 39.99,
    ingredients: ["кальцій", "магній"],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [rate, setRate] = React.useState(0);
  const product = productDetails.find((product) => product.id === Number(id));

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <Wrapper>
      <Container>
        <div className="product-details">
          <InnerContent>
            <Image src={tablet} alt={product.name} />
            <TextBlock>
              <h2>{product.name}</h2>
              <div>
                <IconButton sx={{ color: "gray" }}>
                  <Rating
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => {
                      setRate(newValue);
                    }}
                  />
                </IconButton>
              </div>

              <p>{product.description}</p>
              <p>Ціна: ${product.price}</p>
              <p>Склад:</p>

              {product.ingredients.map((ingredient) => (
                <p>{ingredient}</p>
              ))}
            </TextBlock>
          </InnerContent>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ProductDetails;
