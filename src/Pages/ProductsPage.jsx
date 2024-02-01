import "../styles/ProductsPage.css"; // Import the CSS file for styling\
import React from "react";
import Product from "../components/Product";
import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
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
    name: "Product 1",
    price: "19.99",
    description: "Description for Product 1",
    imageUrl: tablets,
    ingredients: ["calcium", "magnesium"],
  },
  {
    id: 2,
    name: "Product 2",
    price: "29.99",
    description: "Description for Product 2",
    imageUrl: tablets,
    ingredients: ["calcium", "magnesium"],
  },
  {
    id: 3,
    name: "Product 3",
    price: "19.99",
    description: "Description for Product 3",
    imageUrl: tablets,
    ingredients: ["calcium", "magnesium"],
  },
  {
    id: 4,
    name: "Product 4",
    price: "29.99",
    description: "Description for Product 4",
    imageUrl: tablets,
    ingredients: ["calcium", "magnesium"],
  },
  {
    id: 5,
    name: "Product 5",
    price: "29.99",
    description: "Description for Product 5",
    imageUrl: tablets,
    ingredients: ["calcium", "magnesium"],
  },
  {
    id: 6,
    name: "Product 6",
    price: "29.99",
    description: "Description for Product 6",
    imageUrl: tablets,
    ingredients: ["calcium", "magnesium"],
  },
  {
    id: 7,
    name: "Product 7",
    price: "29.99",
    description: "Description for Product 7",
    imageUrl: tablets,
    ingredients: ["calcium", "magnesium"],
  },
];

const ProductsPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [isShow, setIsShow] = React.useState(false);

  const [age, setAge] = React.useState(0);
  const [weigth, setWeigth] = React.useState(0);
  const [isMale, setIsMale] = React.useState();
  const [height, setHeight] = React.useState(0);
  const [activity, setActivity] = React.useState();
  const [sleepQuality, setSleepQuality] = React.useState();
  const [fatigue, setFatigue] = React.useState();
  const [allergicReactions, setAllergicReactions] = React.useState([]);
  const [illnesses, setIllnesses] = React.useState([]);
  const [productComposition, setProductComposition] = React.useState([]);

  const getProducts = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsShow(true);
    }, 1000);
  };

  const handleAgeChange = (event) => {
    setAge(isNaN(Number(event.target.value)) ? 0 : Number(event.target.value));
  };
  const handleWeigthChange = (event) => {
    setWeigth(
      isNaN(Number(event.target.value)) ? 0 : Number(event.target.value)
    );
  };
  const handleSexChange = (event, value) => {
    setIsMale(value);
  };
  const handleHeightChange = (event) => {
    setHeight(
      isNaN(Number(event.target.value)) ? 0 : Number(event.target.value)
    );
  };
  const handleActivityChange = (event, value) => {
    setActivity(value);
  };
  const handleSleepQualityChange = (event, value) => {
    setSleepQuality(value);
  };
  const handleFatigueChange = (event, value) => {
    setFatigue(value);
  };
  const handleAllergicReactionsChange = (event) => {
    const {
      target: { value },
    } = event;
    setAllergicReactions(value);
  };
  const handleIllnessesChange = (event) => {
    const {
      target: { value },
    } = event;
    setIllnesses(value);
  };
  const handleProductCompositionChange = (event) => {
    const {
      target: { value },
    } = event;
    setProductComposition(value);
  };
  return (
    <Wrapper>
      <Container>
        <Inputs>
          <TextField
            id="age-basic"
            label="Вік"
            variant="standard"
            value={age}
            onChange={handleAgeChange}
          />
          <TextField
            id="weight-basic"
            label="Вага"
            variant="standard"
            value={weigth}
            onChange={handleWeigthChange}
          />

          <TextField
            id="height-basic"
            label="Зріст (у см)"
            variant="standard"
            value={height}
            onChange={handleHeightChange}
          />

          <FormControl sx={{ width: 170 }}>
            <InputLabel id="Sex-select-label">Стать</InputLabel>
            <Select
              labelId="Sex-select-label"
              id="Sex-select"
              value={isMale}
              label="Стать"
              onChange={handleSexChange}
            >
              <MenuItem value={true}>Чоловіча</MenuItem>
              <MenuItem value={false}>Жіноча</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: 230 }}>
            <InputLabel id="activity-select-label">Денна активність</InputLabel>
            <Select
              labelId="activity-select-label"
              id="activity-select"
              label="Денна активність"
              value={activity}
              onChange={handleActivityChange}
            >
              <MenuItem value={1}>Низька</MenuItem>
              <MenuItem value={2}>Помірна</MenuItem>
              <MenuItem value={3}>Висока</MenuItem>
              <MenuItem value={4}>Дуже висока</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 230 }}>
            <InputLabel id="sleep-select-label">Якість сну</InputLabel>
            <Select
              labelId="sleep-select-label"
              id="sleep-select"
              label="Sleep quality"
              value={sleepQuality}
              onChange={handleSleepQualityChange}
            >
              <MenuItem value={1}>Погана</MenuItem>
              <MenuItem value={2}>Можна краще</MenuItem>
              <MenuItem value={3}>Хороша</MenuItem>
              <MenuItem value={4}>Дуже хороша</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 230 }}>
            <InputLabel id="fatigue-select-label">Рівень втоми</InputLabel>
            <Select
              labelId="fatigue-select-label"
              id="fatigue-select"
              label="Fatigue"
              value={fatigue}
              onChange={handleFatigueChange}
            >
              <MenuItem value={1}>Низький</MenuItem>
              <MenuItem value={2}>Помірний</MenuItem>
              <MenuItem value={3}>Високий</MenuItem>
              <MenuItem value={4}>Дуже високий</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 230 }}>
            <InputLabel id="alergic-select-label">Алергія</InputLabel>
            <Select
              labelId="alergic-select-label"
              id="alergic-select"
              label="Алергія"
              value={allergicReactions}
              onChange={handleAllergicReactionsChange}
              multiple
            >
              <MenuItem value={1}>Вітамін B</MenuItem>
              <MenuItem value={2}>Вітамін C</MenuItem>
              <MenuItem value={3}>Вітамін D</MenuItem>
              <MenuItem value={4}>Немає</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 230 }}>
            <InputLabel id="illnesses-select-label">
              Проблеми/хвороби
            </InputLabel>
            <Select
              labelId="illnesses-select-label"
              id="illnesses-select"
              label="Проблеми/хвороби"
              value={illnesses}
              onChange={handleIllnessesChange}
              multiple
            >
              <MenuItem value={1}>Діабет</MenuItem>
              <MenuItem value={2}>Високий холестерин</MenuItem>
              <MenuItem value={3}>Ниркова недостатність</MenuItem>
              <MenuItem value={4}>Серцева недостатність</MenuItem>
              <MenuItem value={5}>немає</MenuItem>
            </Select>
          </FormControl>
        </Inputs>
        <ButtonWrapper>
          <Button variant="contained" size="large" onClick={getProducts}>
            рекомендувати
          </Button>
        </ButtonWrapper>
        {isShow ? (
          <>
            <h1>Магній</h1>
            <ul>
              <li>
                <strong>Підтримка здоров'я серця:</strong> Магній сприяє
                нормальному ритму серця, зменшує ризик розвитку аритмій та
                допомагає знизити артеріальний тиск.
              </li>
              <li>
                <strong>Зміцнення кісток:</strong> Цей елемент допомагає
                зберігати кісткову щільність та знижує ризик виникнення
                остеопорозу, особливо в поєднанні з кальцієм та вітаміном D.
              </li>
              <li>
                <strong>Підтримка нервової системи:</strong> Магній сприяє
                передачі сигналів у нервах, забезпечуючи нормальну роботу
                нервово-м'язової системи та зменшуючи стрес.
              </li>
              <li>
                <strong>Регулювання рівня цукру в крові:</strong> Він може
                допомагати знижувати ризик розвитку діабету типу 2, оскільки
                впливає на чутливість до інсуліну.
              </li>
              <li>
                <strong>Підтримка енергетичного обміну:</strong> Магній бере
                участь у перетворенні їжі на енергію, сприяючи метаболізму.
              </li>
            </ul>
            <p>
              Недостатній рівень магнію може призвести до різних проблем зі
              здоров'ям, включаючи м'язеву слабкість, нервову збудливість,
              безсоння та інші проблеми.
            </p>
            <p>Рекомендована денна норма для Вас - 425 мг на день</p>
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
          </>
        ) : (
          <h1 style={{ textAlign: "center" }}>Тут будуть ваші продукти</h1>
        )}
        {loading && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <CircularProgress size={300} />
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

export default ProductsPage;
