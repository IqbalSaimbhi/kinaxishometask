import { render } from "@testing-library/react"
import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import Cart from "./Cart"
import items from "./mockCart"
import { Provider } from "react-redux"
import store from "../../redux/store"

test("Should render cart items", () => {
  const { getByText, getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <Cart cart={items} />
      </Provider>
  )
  expect(getByText("Proceed To Checkout")).toBeInTheDocument()
  expect(getByTestId("cartItem-list")).toBeInTheDocument()
  expect(getAllByTestId("cartItem-list")).toHaveLength(1)
})
