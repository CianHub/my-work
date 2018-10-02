import React, { Component } from "react";
//Import components
import Header from "../header/header";
import Profile from "./profile/profile";
import Bar from "./bars/bar";
import Icon from "./icons/icon";
//Import animations
import Fade from "react-reveal/Fade";

class Aboutsection extends Component {
  // Create the about section

  state = {
    bars: [
      {
        skill: "HTML",
        percent: 90
      },
      {
        skill: "SASS",
        percent: 70
      },
      {
        skill: "JavaScript",
        percent: 80
      },
      {
        skill: "React",
        percent: 75
      },
      {
        skill: "Photoshop",
        percent: 70
      },
      {
        skill: "Python",
        percent: 80
      },
      {
        skill: "Django",
        percent: 70
      },
      {
        skill: "MongoDB",
        percent: 70
      },
      {
        skill: "PostgreSQL",
        percent: 65
      }
    ],
    icons: [
      {
        icon: "rocket",
        text: "I love making projects feel alive and vibrant to the user.",
        title: "Dynamic"
      },
      {
        icon: "mobile-alt",
        text: "I like web applications to seemlessly function on any device.",
        title: "Responsive"
      },
      {
        icon: "lightbulb",
        text:
          "I enjoy learning new technologies and staying up to date with the latest tools.",
        title: "Always Learning"
      },
      {
        icon: "users",
        text: "I aim to provide the user with best UX experience possible.",
        title: "User Friendly"
      }
    ],

    img: "https://i.postimg.cc/NfRVTRBD/image.jpg",
    bio:
      "I'm a highly focused web developer with several years of diverse experience in a variety of digital media and design based roles. I like to create dynamic, user-friendly web applications and continue to improve my abilities.",
    cv:
      "https://drive.google.com/file/d/1XjSEkJNjIpcjNdtNM3osbvoj3HVqUCIb/view?usp=sharing"
  };

  makeBars = () => {
    // Generates Progress Bars

    //Create an array of arrays containing bars data
    let barData = Object.entries(this.state.bars);

    //Init empty array
    let data = [];

    for (let i = 0; i < barData.length; i++) {
      for (let x = 0; x < barData[i].length; x++) {
        // Access data
        if (barData[i][x].percent > 0) {
          // Filters out extra arrays created by .entries()
          data.push(
            //Add a bar per item to the array
            <Bar
              key={i}
              skill={barData[i][x].skill}
              percent={barData[i][x].percent}
            />
          );
        }
      }
    }
    return data;
  };

  makeIcons = () => {
    // Generates icons

    //Create an array of arrays containing icons data
    let iconData = Object.entries(this.state.icons);

    //Init empty array
    let data = [];

    for (let i = 0; i < iconData.length; i++) {
      for (let x = 0; x < iconData[i].length; x++) {
        // Access data
        if (iconData[i][x].icon) {
          // Filters out extra arrays created by .entries()
          data.push(
            //Add a bar per item to the array
            <div key={i} className="col-lg-3 col-md-6 text-center">
              <Icon
                key={i}
                icon={iconData[i][x].icon}
                title={iconData[i][x].title}
                text={iconData[i][x].text}
              />
            </div>
          );
        }
      }
    }
    return data;
  };

  render() {
    return (
      <section id="about">
        <Header text="At Your Service" textId="aboutText" hrId="aboutHr" />

        <div className="container about-icons">
          <div className="row">
            <Fade left>{this.makeIcons()}</Fade>
          </div>
        </div>
        <br />

        <div className="container about-cian align-center ">
          <div className="row">
            <Fade left>
              <Profile
                img={this.state.img}
                text={this.state.bio}
                cv={this.state.cv}
              />
            </Fade>
          </div>
        </div>
        <br />

        <div className="container about-progress-bars ">{this.makeBars()}</div>
      </section>
    );
  }
}

export default Aboutsection;
