import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Product from "../components/Product";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "19.99",
    description: "Description for Product 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: "29.99",
    description: "Description for Product 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: "19.99",
    description: "Description for Product 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: "29.99",
    description: "Description for Product 2",
    imageUrl: "https://via.placeholder.com/150",
  },
];
const Container = styled.div`
  max-width: 1360px;
  padding: 0 30px;
  margin: 0 auto;
`;
const Inner = styled.div`
  padding: 30px 0;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 30px;
  min-height: calc(100vh - 170px);
`;
const TabContentAccount = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TabContentFavorites = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ProductWrapper = styled.div`
  position: relative;
`;
const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 25px;
  right: 25px;
`;
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Account = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = {
    0: (
      <TabContentAccount>
        <TextField label="Ім'я" variant="outlined" />
        <TextField label="Прізвище" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Пароль" variant="outlined" type="password" />
        <Button variant="contained" size="large">
          зареєструватись
        </Button>
      </TabContentAccount>
    ),
    // 1: (
    //   <TabContentFavorites>
    //     <ProductsGrid>
    //       {products.map((product) => (
    //         <ProductWrapper>
    //           <Product
    //             key={product.id}
    //             name={product.name}
    //             id={product.id}
    //             price={product.price}
    //             description={product.description}
    //             imageUrl={product.imageUrl}
    //           />
    //           <StyledIconButton sx={{ color: "#FF0000" }}>
    //             <FavoriteIcon />
    //           </StyledIconButton>
    //         </ProductWrapper>
    //       ))}
    //     </ProductsGrid>
    //   </TabContentFavorites>
    // ),
  };

  return (
    <Container>
      <Inner>
        <Wrapper>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
          >
            <Tab
              label="Account"
              sx={{
                height: 70,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
              }}
            />
            {/* <Tab
              label="Favorites"
              sx={{
                height: 70,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
              }}
            /> */}
          </Tabs>

          <Button
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
            }}
          >
            Logout
          </Button>
        </Wrapper>
        {tabs[value]}
      </Inner>
    </Container>
  );
};

export default Account;
