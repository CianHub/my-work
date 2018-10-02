// contact.contact.test.js
import React from "react";
import Contactmain from "./contact";
import renderer from "react-test-renderer";

test("Contact section is rendered", () => {
  const component = renderer.create(
    <Contactmain
      email="mailto:cian@cianogralaigh.com"
      linkedin="https://www.linkedin.com/in/cian-o-gralaigh/"
      github="https://github.com/CianHub"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
