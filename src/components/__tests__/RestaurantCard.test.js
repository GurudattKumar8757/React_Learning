import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Natural Ice Cream");

  expect(resName).toBeInTheDocument();
});