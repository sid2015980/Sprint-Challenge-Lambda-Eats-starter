import React, { useState, useEffect } from "react";
import axios from "axios";
import pizzaimg from "../src/pizza2.jpg";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const Sauce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 2rem;
`;

const Border = styled.div`
  border: 2px solid black;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const Body = styled.body`
  max-width: 800px;
  margin: 0 auto;
`;

const Imgstyled = styled.img`
  width: 100%;
  height: 200px;
`;

const Title = styled.div`
  background: lightgray;
  padding-left: 2rem;
`;

const Toppingsdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-left: 2rem;
`;
const ToppingsParent = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Buttonandnumber = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Selectsize = styled.div`
  padding-left: 2rem;
`;

const Header = styled.p`
  text-align: center;
  color:red;
`;

function Pizza({ status, errors, touched }) {
  const [post, setPost] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    status && setPost(status);
    setEmpty(true);
  }, [status]);

  return (
    <Body>
      <div>
        <Border>
          <h1>Build Your Own Pizza</h1>
          <Imgstyled src={pizzaimg} />
          <Form>
            <Title>
              <h2>Choice of Size</h2>
              <h3>Required.</h3>
            </Title>
            <Selectsize>
              <label htmlFor="size">
                <Field id="size" as="select" name="size">
                  <option value="Select Size">Select Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="X-Large">X-Large</option>
                </Field>
              </label>
            </Selectsize>

            <Title>
              <h2>Choice of Sauce</h2>
              <h3>Required.</h3>
            </Title>

            <Sauce>
              <label htmlFor="original">
                {" "}
                Original Red
                <Field
                  type="radio"
                  value="check"
                  name="original"
                  id="original"
                />
              </label>

              <label htmlFor="ranch">
                {" "}
                Garlic Ranch
                <Field type="radio" value="check" name="ranch" id="ranch" />
              </label>

              <label htmlFor="bbq">
                {" "}
                BBQ sauce
                <Field type="radio" value="check" name="bbq" id="bbq" />
              </label>

              <label htmlFor="alfredo">
                {" "}
                Spinach Alfredo
                <Field type="radio" value="check" name="alfredo" id="alfredo" />
              </label>
            </Sauce>

            <Title>
              <h2>Add toppings</h2>
              <h3>Choose up to 6.</h3>
            </Title>

            <ToppingsParent>
              <Toppingsdiv>
                <label htmlFor="pepperoni">
                  <Field
                    type="checkbox"
                    value="check"
                    name="pepperoni"
                    id="pepperoni"
                  />
                  Pepperoni
                </label>

                <label htmlFor="sausage">
                  <Field
                    type="checkbox"
                    value="check"
                    name="sausage"
                    id="sausage"
                  />
                  Sausage
                </label>

                <label htmlFor="olives">
                  <Field
                    type="checkbox"
                    value="check"
                    name="olives"
                    id="olives"
                  />
                  Black Olives
                </label>
              </Toppingsdiv>

              <Toppingsdiv>
                <label htmlFor="italian">
                  <Field
                    type="checkbox"
                    value="check"
                    name="italian"
                    id="italian"
                  />
                  Spicy Italian Sausage
                </label>

                <label htmlFor="hearts">
                  <Field
                    type="checkbox"
                    value="check"
                    name="artichokeHearts"
                    id="artichokeHearts"
                  />
                  Artichoke Hearts
                </label>

                <label htmlFor="xcheese">
                  <Field
                    type="checkbox"
                    value="check"
                    name="xcheese"
                    id="xcheese"
                  />
                  Extra Cheese
                </label>
              </Toppingsdiv>
            </ToppingsParent>

            <div>
              <Title>Special Instructions</Title>
              <label htmlFor="instructions">
                <Field
                  name="instructions"
                  as="textarea"
                  placeholder="Please place any special instructions here."
                />
                {errors.instructions && touched.instructions && (
                  <Header>{errors.instructions}</Header>
                )}
              </label>
            </div>

            <Buttonandnumber>
              <Field 
              type="number" 
              name="quantity" 
              id="quantity" />
              <button as="Button" type="submit">
                Add to Order! $20.00
              </button>
            </Buttonandnumber>
          </Form>
        </Border>

        {empty ? (
          <div>
            {post.map((item, i) => (
              <div key={i}>{JSON.stringify(item, null, 2)}</div>
            ))}
          </div>
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    </Body>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    quantity: "",
    size: "",
    original: "",
    ranch: "",
    instructions: "",
    bbq: "",
    alfredo: "",
    pepperoni: "",
    sausage: "",
    olives: "",
    italian: "",
    artichokeHearts: "",
    xcheese: ""
  }),

  validationSchema: yup.object().shape({
    instructions: yup
      .string()
      .required("Special instructions must be filled out. If none, write: N/A ")
      .min(3, "You must put more than 2 characters in this field")
  }),

  handleSubmit: (values, { setStatus, resetForm }) => {
    axios.post("https://reqres.in/api/users", values).then(response => {
      setStatus([response.data]);
    });
    resetForm();
  }
})(Pizza);
