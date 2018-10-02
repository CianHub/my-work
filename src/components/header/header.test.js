// contact.contact.test.js
import React from "react";
import Header from "./header";
import renderer from "react-test-renderer";

test("Icon is rendered", () => {
  const component = renderer.create(
    <Header text="I'm the text" textId="testID" hrId="testHR" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Icon is rendered with white coloring", () => {
  const component = renderer.create(
    <Header text="At Your Service" textId="aboutText" hrId="aboutHr" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
