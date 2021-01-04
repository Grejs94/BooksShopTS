import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

import {
  selectBooksBasket,
  sendForm,
  setOrderCompleted,
  cleanBasket,
} from "features/books/booksSlice";

import {
  composeValidators,
  isRequired,
  isValidEmail,
  isValidLastName,
} from "./validation";
import { TextInput } from "./TextInput";
import * as Styled from "./styles";

const FormComponent: React.FC = () => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBooksBasket);

  interface Ibook {
    author: string;
    cover_url: string;
    currency: string;
    id: number;
    pages: number;
    price: number;
    title: string;
    value: number;
  }

  const onSubmit = async (values: any) => {
    const { firstName, lastName, city, postalCode } = values;

    const books = basket.map((book: Ibook) => ({
      id: book.id,
      quantity: book.value,
    }));

    const order = {
      order: books,
      first_name: firstName,
      last_name: lastName,
      city,
      zip_code: postalCode,
    };

    dispatch(sendForm(order));
    dispatch(setOrderCompleted(true));
    dispatch(cleanBasket());
  };

  return (
    <Styled.Container>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({
          handleSubmit,
          submitting,
          pristine,
          form,
          submitFailed,
          submitError,
        }) => (
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              // setTimeout(() => {
              //   form.reset();
              // }, 1000);

              // /\d{2}-\d{3}/

              //               first_name: ""first_name" length must be at least 4 characters long"
              // last_name: ""last_name" length must be at least 5 characters long"
            }}
          >
            <Styled.FieldContainer>
              <label>Imię</label>
              <Field name="firstName" validate={isRequired}>
                {({ input, meta }) => (
                  <Styled.InputContainer>
                    <Styled.Input
                      {...input}
                      type="text"
                      placeholder="First Name"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </Styled.InputContainer>
                )}
              </Field>
            </Styled.FieldContainer>
            <Field
              name="lastName"
              component={TextInput}
              type="text"
              placeholder="Last Name"
              label="Nazwisko"
              validate={composeValidators(isRequired, isValidLastName)}
            />
            <div>
              <label>Miejscowość</label>
              <Field
                name="city"
                component="input"
                type="text"
                placeholder="Last Name"
                validate={composeValidators(isRequired)}
              />
            </div>
            <div>
              <label>Kod pocztowy (xx-xxx)</label>
              <Field
                name="postalCode"
                component="input"
                type="text"
                placeholder="Last Name"
                validate={isRequired}
              />
            </div>
            <div className="buttons">
              <div className="buttonContainer">
                <Link to="/BasketPage">
                  <button type="button">Powrót do koszyka</button>
                </Link>
              </div>
              <div className="buttonContainer">
                <button type="submit" disabled={submitting || pristine}>
                  Zamawiam i płacę
                </button>
              </div>
            </div>
          </form>
        )}
      />
    </Styled.Container>
  );
};

export default FormComponent;
