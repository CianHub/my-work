// projects.projects.test.js
import React from "react";
import renderer from "react-test-renderer";
import Projectsection from "./projects";

test("Project section is rendered", () => {
  const component = renderer.create(<Projectsection />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
