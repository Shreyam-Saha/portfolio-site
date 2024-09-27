import { Carousel } from "antd";
import { useState, useEffect } from "react";
import reactLogo from "../../assets/react-logo.svg";
import azureLogo from "../../assets/azure-logo.svg";
import azuredevOpsLogo from "../../assets/azuredevops-logo.svg";
import gitLogo from "../../assets/git-Logo.svg";
import dockerLogo from "../../assets/docker-logo.svg";
import mongoLogo from "../../assets/mongodb-logo.svg";
import pythonLogo from "../../assets/python-logo.svg";
import developingFirstLogo from "../../assets/developing-first.svg";
import developingSecondLogo from "../../assets/developing-second.svg";
import "./Projects.css";

function Projects() {
  const [showFirst, setShowFirst] = useState(true); // Toggle between the two SVGs

  useEffect(() => {
    // Toggle the state between the two SVGs every 2 seconds (2000 ms)
    const intervalId = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="projects-page-container">
      <div className="section-container skills">
        <h3 className="project-heading skill-heading">Skills</h3>
        <Carousel autoplay infinite autoplaySpeed={3000}>
          <div>
            <img alt="react-img" src={reactLogo} />
          </div>
          <div>
            <img alt="react-img" src={azureLogo} />
          </div>

          <div>
            <img alt="react-img" src={azuredevOpsLogo} />
          </div>
          <div>
            <img alt="react-img" src={gitLogo} />
          </div>
          <div>
            <img alt="react-img" src={mongoLogo} />
          </div>
          <div>
            <img alt="react-img" src={pythonLogo} />
          </div>
          <div>
            <img alt="dockr-img" src={dockerLogo} />
          </div>
        </Carousel>
      </div>
      <div className="vertical-line"></div>
      <div className="section-container projects">
        <h3 className="project-heading">Projects</h3>

        <div className="svg-container">
          <img
            className={`svg ${showFirst ? "first-svg" : ""}`}
            src={developingFirstLogo}
            alt="First SVG"
          />
          <img
            className={`svg ${!showFirst ? "second-svg" : ""}`}
            src={developingSecondLogo}
            alt="Second SVG"
          />

          <h2>Building 👷‍♂️ . . .</h2>
        </div>
      </div>
    </div>
  );
}

export default Projects;
