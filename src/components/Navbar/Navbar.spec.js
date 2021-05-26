import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { MemoryRouter } from "react-router-dom";

const cartMock = [
  {
    id: 1,
    title: "Make-up Kit",
    description:
      "Make-up Kit by BB. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    qty: 1
  }
];

test("Should render products", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Navbar cart={cartMock} />
      </MemoryRouter>
    </Provider>
  );
  expect(getByTestId("navbar-heading")).toHaveTextContent("Kinaxis Home Task");
  expect(getByTestId("cart-count")).toBeInTheDocument();
  expect(getByTestId("cart-title")).toBeInTheDocument();
});
