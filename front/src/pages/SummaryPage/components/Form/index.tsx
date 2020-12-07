import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

import { selectBooksBasket, sendForm } from "features/books/booksSlice";
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

    const books = basket.map((book: Ibook) => {
      return {
        id: book.id,
        quantity: book.value,
      };
    });

    const order = {
      order: books,
      first_name: firstName,
      last_name: lastName,
      city,
      zip_code: postalCode,
    };

    dispatch(sendForm(order));
  };

  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
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
              <Link to="/BasketPage">
                <button type="button">Powrót do koszyka</button>
              </Link>
              <button type="submit" disabled={submitting || pristine}>
                Zamawiam i płacę
              </button>
            </div>
          </form>
        )}
      />
    </Styles>
  );
};

export default FormComponent;
