const { render, screen, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordinHeader = screen.getByText("Rs 129 Deal Of The Day (23)");

  fireEvent.click(accordinHeader);

  expect(screen.getAllByTestId("foodItem").length).toBe(23);

  expect(screen.getByText("Cart - (0 Items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 Items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 Items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(25);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItem").length).toBe(23);

  expect(
    screen.getByText("Cart is empty... Add Items to the Cart!")
  ).toBeInTheDocument();
});
