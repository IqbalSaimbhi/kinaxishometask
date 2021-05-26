import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Products from "./Products";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { MemoryRouter } from "react-router-dom";

const mockProducts = [
  {
    id: 1,
    title: "Make-up Kit",
    description:
      "Make-up Kit by BB. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
  },
  {
    id: 2,
    title: "Go-Pro Camera",
    description:
      "Lastest Outdoor Camera. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1555611637-09de5810478e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIxOTk4NTY2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
  },
  {
    id: 3,
    title: "Trench Coat- By Paris",
    description:
      "Designed by Paris Best Brand. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1550872199-63f4382fe925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIxOTk4NzYz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
  }
];

test("Should render products", () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Products products={mockProducts} />
      </MemoryRouter>
    </Provider>
  );
  expect(getAllByTestId("product-item")).toHaveLength(3);
  expect(getAllByTestId("view-item-button")).toHaveLength(3);
  expect(getAllByTestId("add-to-cart-button")).toHaveLength(3);
});
