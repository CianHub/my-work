// navbar.navbar.test.js
import React from "react";
import renderer from "react-test-renderer";
import Navbar from "./navbar";

test("Navbar is rendered", () => {
  const component = renderer.create(<Navbar />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
