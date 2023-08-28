import React, { Component } from "react";
import ReactDOM from "react-dom/client";

/**
 *
 *
 * <div id="parent">
 *      <div id="child1">
 *          <h1> I'm an h1 tag</h1>
 *          <h2> I'm an h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1> I'm an h1 tag</h1>
 *          <h2> I'm an h2 tag</h2>
 *      </div>
 * </div>
 *
 *ReactElement(Object) => HTML(Browser Understand)
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I,m an h1 tag 🚀"),
//     React.createElement("h2", {}, "I,m an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I,m an h1 tag"),
//     React.createElement("h2", {}, "I,m an h2 tag"),
//   ]),
// ]);

// console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello Word from React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(parent);

//React Element
const jsxHeading = <h1 tabIndex="5">Hello React using JSX 🚀</h1>;

//React Functional Component
const Title = () => (
  <h1 id="heading" tabIndex="5">
    Hello React using JSX 🚀
  </h1>
);

const HeadingComponent2 = () => {
  return <h1 className="heading">React Functional Component</h1>;
};

//Both functional definitions are same
//Component Composition
const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    <Title />
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

root.render(<HeadingComponent />);
