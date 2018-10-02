// about.profile.test.js
import React from "react";
import Profile from "./profile";
import renderer from "react-test-renderer";

test("Icon is rendered", () => {
  const component = renderer.create(
    <Profile
      img="https://i.postimg.cc/NfRVTRBD/image.jpg"
      text="Hello World"
      cv="www.google.com"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
