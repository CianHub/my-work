// about.bar.test.js
import React from "react";
import Bar from "./bar";
import renderer from "react-test-renderer";

test("Bar is rendered", () => {
  const component = renderer.create(<Bar skill="HTML" percent="90" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
