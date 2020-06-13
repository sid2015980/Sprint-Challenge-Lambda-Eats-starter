import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Pizza from "./Pizza";
import Home from "./Home";

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const Body = styled.body`
  max-width: 800px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  padding-left: 2rem;
`;

function App() {
  return (
    <Body>
      <div>
        <Header>
          LAMBDA EATS
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/Order">Order</Link>
          </Nav>
        </Header>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Order">
          <Pizza />
        </Route>
      </div>
    </Body>
  );
}

export default App;
