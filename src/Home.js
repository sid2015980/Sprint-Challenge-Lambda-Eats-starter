import React from "react";
import pizzaimg2 from "../src/Pizza.jpg";
import styled from "styled-components";

const Body = styled.body`
  max-width: 800px;
  margin: 0 auto;
`;

const Imgstyled = styled.img`
  width: 100%;
  height: 400px;
`;

const Header = styled.h1`
  text-align: center;
  color:red;
`;

function Home() {
  return (
    <Body>
      <div>
        <Header>Welcome to Lambda Eats!</Header>
        <Imgstyled src={pizzaimg2} />
        <Header>Please Click on "Order" to place an order!</Header>
      </div>
    </Body>
  );
}

export default Home;
