// about.icon.test.js
import React from "react";
import Icon from "./icon";
import renderer from "react-test-renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

test("Icon is rendered", () => {
  const component = renderer.create(
    <Icon icon="users" title="Spaceship" text="This goes to space!" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
