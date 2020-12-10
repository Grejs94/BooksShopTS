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
import Styles from "./styles";

const FormComponent = () => {
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
    <Styles>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, submitting, pristine, form }) => (
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              setTimeout(() => {
                form.reset();
              }, 1000);
            }}
          >
            <div>
              <label>Imię</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Nazwisko</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Miejscowość</label>
              <Field
                name="city"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Kod pocztowy (xx-xxx)</label>
              <Field
                name="postalCode"
                component="input"
                type="text"
                placeholder="Last Name"
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
    </Styles>
  );
};

export default FormComponent;
