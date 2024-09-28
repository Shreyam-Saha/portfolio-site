import twitterLogo from "../../assets/twitter.svg";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import profileImage from "../../assets/profile.jpg";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./Home.css";
function Home() {
  return (
    <div className="profile-container">
      <div>
        <img
          src={profileImage}
          alt="Description of image"
          className="circular-image"
        />
      </div>
      <h1>Shreyam Saha</h1>
      <p className="profile-desc">
        Hello, I am Shreyam Saha, a software developer with over 3 years of
        experience. Currently working @ Amdocs, utilizing my skills in React,
        Kubernetes, Terraform, Docker, ELK stack, and Grafana. I am also
        Microsoft Azure certified. My passion for coding drives me to
        continuously learn and upskill, staying ahead in the tech world. I love
        exploring new technologies and creating scalable, efficient solutions.
      </p>
      <div className="icon-bar">
        <a
          className="social-links"
          data-tooltip-id="my-custom-tooltip"
          data-tooltip-content="Twitter"
          href="https://x.com/coder_panda_"
          target="_blank"
        >
          <img src={twitterLogo} className="icon" alt="Twitter Logo" />
        </a>
        <a
          className="social-links"
          data-tooltip-id="my-custom-tooltip"
          data-tooltip-content="LinkedIn"
          href="https://www.linkedin.com/in/shreyam-saha/"
          target="_blank"
        >
          <img src={linkedinLogo} className="icon" alt="LinkedIn Logo" />
        </a>
        <a
          className="social-links"
          data-tooltip-id="my-custom-tooltip"
          data-tooltip-content="Github"
          href="https://github.com/Shreyam-Saha"
          target="_blank"
        >
          <img src={githubLogo} className="icon" alt="Github Logo" />
        </a>
        <ReactTooltip
          className="custom-tooltip"
          id="my-custom-tooltip"
          place="bottom"
        />
      </div>
    </div>
  );
}

export default Home;
