// projects.card.test.js
import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";

test("Card is rendered", () => {
  const component = renderer.create(
    <Card
      img="https://i.postimg.cc/HkKvzMCV/Screen_Shot_2018-09-28_at_01.14.19.png"
      imgAlt="Riddle Me This"
      title="Riddle Me This"
      text="Technologies Used: HTML, CSS, Bootstrap, JavaScript, jQuery, Python, Flask, Heroku, JSON"
      link="https://riddle-me-this-game.herokuapp.com/"
      github="https://github.com/CianHub/guessing-game"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
