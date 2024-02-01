import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;
const Container = styled.div`
  max-width: 1360px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const AccountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;
const routes = [
  {
    label: "Домашня",
    path: "/",
  },
  {
    label: "Тест",
    path: "/product",
  },
  {
    label: "Продукти",
    path: "/products",
  },
];
const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const [route, setRoute] = React.useState(location.pathname);

  React.useEffect(() => {
    setRoute(location.pathname);
  }, [location.pathname]);

  return (
    <Wrapper>
      <Container>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img src={logo} height={50} />
            <Title>Metan</Title>
          </Link>
          <TabContext value={route}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", height: 70 }}>
              <TabList aria-label="lab API tabs example">
                {routes.map((route) => (
                  <Tab
                    sx={{
                      height: 70,
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                    }}
                    key={route.path}
                    value={route.path}
                    component={NavLink}
                    to={route.path}
                    label={route.label}
                    onClick={() => setRoute(route.path)}
                  />
                ))}
              </TabList>
            </Box>
          </TabContext>
        </Box>
        <AccountWrapper>
          <AccountCircleIcon
            onClick={() => navigate("/account")}
            sx={{
              fontSize: 50,
              cursor: "pointer",
              fill: location.pathname === "/account" ? "#1976d2" : "gray",
            }}
          />
        </AccountWrapper>
      </Container>
    </Wrapper>
  );
};
export default Navbar;
