import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("Should load contactUs component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    //   const heading = screen.getByRole("button");
    const heading = screen.getByText("Submit");

    expect(heading).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    //   const heading = screen.getByRole("button");
    const heading = screen.getByPlaceholderText("Name");

    expect(heading).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);
    //Querying
    //Multiple Element than getAllByRole()
    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2);
  });
});
