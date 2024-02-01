import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const BackgroundImage = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(0, 0, 0, 0.4)
    ),
    url("/background.jpeg");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 700px;
  width: 100%;
`;
const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 30px;
`;
const MainTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  color: yellow;
  padding-top: 100px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
const HowItWorksBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: palevioletred;
  padding-top: 100px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
const CardItem = styled.div`
  background-color: #f0f4f7;
  border-radius: 10px;
  text-align: left;
  padding: 10px 20px;
`;
const FindMore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
`;
const FindMoreTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  color: black;
  padding-top: 50px;
  margin: 0;
`;
const FindMoreText = styled.p`
  font-size: 20px;
  text-align: center;
  color: gray;
  margin: 0;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
`;
const MainPage = () => {
  return (
    <>
      <BackgroundImage>
        <Container>
          <MainTitle>Бажаємо здоров'я!</MainTitle>
        </Container>
      </BackgroundImage>
      <Container>
        <HowItWorksBlock>
          <Title>Як це працює</Title>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem>
                <AccessibleForwardIcon
                  sx={{ paddingTop: "10px", fontSize: 50, fill: "#1098D4" }}
                />
                <h4>
                  1. Пройдіть тест, щоб отримати персоналізовану рекомендацію
                </h4>
                <p>
                  Ми аналізуємо ваші дані, щоб скласти рекомендацію саме для вас
                </p>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardItem>
                <AccessibleForwardIcon
                  sx={{ paddingTop: "10px", fontSize: 50, fill: "#1098D4" }}
                />
                <h4>
                  2. Пройдіть тест, щоб отримати персоналізовану рекомендацію
                </h4>
                <p>
                  Ми аналізуємо ваші дані, щоб скласти рекомендацію саме для вас
                </p>
              </CardItem>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <CardItem>
                <AccessibleForwardIcon
                  sx={{ paddingTop: "10px", fontSize: 50, fill: "#1098D4" }}
                />
                <h4>
                  3. Пройдіть тест, щоб отримати персоналізовану рекомендацію
                </h4>
                <p>
                  Ми аналізуємо ваші дані, щоб скласти рекомендацію саме для вас
                </p>
              </CardItem>
            </Grid>
          </Grid>
        </HowItWorksBlock>

        <FindMore>
          <Divider />
          <FindMoreTitle>Хочете дізнатись більше?</FindMoreTitle>
          <FindMoreText>Відвідайте наші сторінки у соц-мережах</FindMoreText>
          <Icons>
            <InstagramIcon sx={{ fontSize: 40 }} />
            <TwitterIcon sx={{ fontSize: 40 }} />
            <FacebookIcon sx={{ fontSize: 40 }} />
            <WhatsAppIcon sx={{ fontSize: 40 }} />
          </Icons>
        </FindMore>
      </Container>
    </>
  );
};

export default MainPage;
