// jumbotron.jumbotron.test.js
import React from "react";
import renderer from "react-test-renderer";
import Jumbosection from "./jumbotron";

test("Jumbotron is rendered", () => {
  const component = renderer.create(<Jumbosection />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
