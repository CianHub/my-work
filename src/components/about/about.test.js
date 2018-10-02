import React from "react";
import Aboutsection from "./about";
import renderer from "react-test-renderer";

test("Aboutsection is rendered correctly with no errors", () => {
  const component = renderer.create(<Aboutsection />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
