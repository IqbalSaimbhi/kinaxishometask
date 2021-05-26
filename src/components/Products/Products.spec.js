import { render } from "@testing-library/react"
import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import Products from "./Products"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { MemoryRouter } from 'react-router-dom';


const mockProducts = [
    {
        "id": 1,
        "title": "This is the COOLEST Cube Ever",
        "description": "This cube will keep you busy the entire day and it is very fun to play with",
        "price": 15,
        "image": "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        "id": 2,
        "title": "Large Coffee Cup",
        "description": "Get a big cup of coffee every morning before the day starts",
        "price": 20,
        "image": "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
        "id": 3,
        "title": "Books That CHANGED My Life",
        "description": "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
        "price": 150,
        "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"
    }
]

test("Should render products", () => {
  const { getAllByTestId } = render(
      <Provider store={store}>
          <MemoryRouter>
        <Products products={mockProducts} />
        </MemoryRouter>
      </Provider>
  )
  expect(getAllByTestId("product-item")).toHaveLength(3)
  expect(getAllByTestId("view-item-button")).toHaveLength(3)
  expect(getAllByTestId("add-to-cart-button")).toHaveLength(3)
})
