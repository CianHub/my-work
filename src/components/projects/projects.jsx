import React, { Component } from "react";
//Import animations
import Fade from "react-reveal/Fade";
//Import components
import Header from "../header/header";
import Card from "./card/card";

class Projectsection extends Component {
  state = {
    projects: [
      {
        img:
          "https://i.postimg.cc/904JZNwz/Screen_Shot_2018-09-27_at_23.45.02.png",
        imgAlt: "Issue Tracker",
        title: "Issue Tracker",
        text:
          "Technologies Used: HTML, CSS, Bootstrap, JavaScript, jQuery, Django, Heroku, HighCharts, PostgreSQL",
        link: "https://issue-tracker-cian.herokuapp.com/",
        github: "https://github.com/CianHub/issue-tracker"
      },
      {
        img:
          "https://i.postimg.cc/Y2fV7jQs/Screen_Shot_2018-09-28_at_01.12.45.png",
        imgAlt: "Digital Cookbook",
        title: "Digital Cookbook",
        text:
          "Technologies Used: HTML, CSS, Bootstrap, JavaScript,jQuery, Flask, Heroku, PyMongo, MongoDB, Python",
        link: "https://online-cookbook-project.herokuapp.com/",
        github: "https://github.com/CianHub/digital-cookbook"
      },
      {
        img:
          "https://i.postimg.cc/HkKvzMCV/Screen_Shot_2018-09-28_at_01.14.19.png",
        imgAlt: "Riddle Me This",
        title: "Riddle Me This",
        text:
          "Technologies Used: HTML, CSS, Bootstrap, JavaScript, jQuery, Python, Flask, Heroku, JSON",
        link: "https://riddle-me-this-game.herokuapp.com/",
        github: "https://github.com/CianHub/guessing-game"
      },
      {
        img:
          "https://i.postimg.cc/NfjNwDsK/Screen_Shot_2018-09-28_at_01.15.12.png",
        imgAlt: "SIMON Memory Game",
        title: "SIMON Memory Game",
        text: "Technologies Used: HTML, CSS, JavaScript, jQuery",
        link: "https://cianhub.github.io/memory-game/",
        github: "https://github.com/CianHub/memory-game"
      },
      {
        img:
          "https://i.postimg.cc/Z59VWqyZ/Screen_Shot_2018-09-28_at_01.15.57.png",
        imgAlt: "Band Website",
        title: "Band Website",
        text: "Technologies Used: HTML, CSS, Bootstrap, JavaScript, jQuery",
        link: "https://cianhub.github.io/the-monkees-website/",
        github: "https://github.com/CianHub/the-monkees-website"
      },
      {
        img:
          "https://i.postimg.cc/PxH4VzVr/Screen_Shot_2018-09-28_at_01.17.07.png",
        imgAlt: "JavaScript Piano",
        title: "JavaScript Piano",
        text: "Technologies Used: HTML, CSS, Bootstrap, JavaScript, Audio",
        link: "https://cianhub.github.io/javascript-piano/",
        github: "https://github.com/CianHub/javascript-piano"
      },
      {
        img:
          "https://i.postimg.cc/nh8Q1VPn/Screen_Shot_2018-09-28_at_01.19.14.png",
        imgAlt: "Weather Finder",
        title: "Weather Finder",
        text:
          "Technologies Used: HTML, CSS, Bootstrap, JavaScript, SASS/SCSS, React",
        link: "https://cianhub.github.io/weather-finder-app/",
        github: "https://github.com/CianHub/javascript-piano"
      },
      {
        img:
          "https://i.postimg.cc/9Xr1fpRK/Screen_Shot_2018-09-28_at_01.20.23.png",
        imgAlt: "React and Particle.js Animation",
        title: "React and Particle.js Animation",
        text:
          "Technologies Used: HTML, CSS, Particles, JavaScript, SASS/SCSS, React",
        link: "https://cianhub.github.io/react-particlejs-animation/",
        github: "https://github.com/CianHub/react-particlejs-animation"
      },
      {
        img:
          "https://i.postimg.cc/zfxSzbJq/Screen_Shot_2018-09-28_at_01.21.38.png",
        imgAlt: "Animated Vanilla JavaScript Clock",
        title: "Animated Vanilla JavaScript Clock",
        text: "Technologies Used: HTML, CSS, JavaScript",
        link: "https://cianhub.github.io/javascript-clock/",
        github: "https://github.com/CianHub/javascript-clock"
      }
    ]
  };

  makeProject = () => {
    // Generates Project

    //Create an array of arrays containing project data
    let projectData = Object.entries(this.state.projects);

    //Init empty array
    let data = [];

    for (let i = 0; i < projectData.length; i++) {
      for (let x = 0; x < projectData[i].length; x++) {
        // Access data
        if (projectData[i][x].img) {
          // Filters out extra arrays created by .entries()
          data.push(
            //Add a project per item to the array
            <Card
              img={projectData[i][x].img}
              imgAlt={projectData[i][x].imgAlt}
              title={projectData[i][x].title}
              text={projectData[i][x].text}
              link={projectData[i][x].link}
              github={projectData[i][x].github}
            />
          );
        }
      }
    }
    return data;
  };
  render() {
    return (
      <section id="projects">
        <Fade left>
          <Header text="Projects" textId="projectsText" hrId="projectsHr" />
        </Fade>
        <Fade left>
          <div className="container">
            <div className="row">{this.makeProject()}</div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Projectsection;
