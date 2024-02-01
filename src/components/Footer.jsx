import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import LinkTab from "@mui/material/Link";

const Container = styled.div`
  max-width: 1360px;
  padding: 0 30px;
  margin: 0 auto;
`;
const FooterBlock = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100px;
`;
const FooterInner = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
  padding-top: 30px;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Container>
        <FooterInner>
          <LinkTab
            sx={{ fontSize: 30 }}
            component={Link}
            underline="hover"
            to="/"
          >
            Домашня
          </LinkTab>
          <LinkTab
            sx={{ fontSize: 30 }}
            component={Link}
            underline="hover"
            to="product"
          >
            Тест
          </LinkTab>
        </FooterInner>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
