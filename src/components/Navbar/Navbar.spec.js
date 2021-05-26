import { render } from "@testing-library/react"
import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import Navbar from "./Navbar"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { MemoryRouter } from 'react-router-dom';

const cartMock = [
    {
        "id": 1,
        "title": "This is the COOLEST Cube Ever",
        "description": "This cube will keep you busy the entire day and it is very fun to play with",
        "price": 15,
        "image": "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "qty": 1
    }
]

test("Should render products", () => {
  const { getByTestId } = render(
      <Provider store={store}>
          <MemoryRouter>
        <Navbar cart={cartMock} />
        </MemoryRouter>
      </Provider>
  )
  expect(getByTestId("navbar-heading")).toHaveTextContent('Redux Shopping Cart')
  expect(getByTestId("cart-count")).toBeInTheDocument()
  expect(getByTestId("cart-title")).toBeInTheDocument()
})
