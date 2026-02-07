import profileImage from "../../assets/profile.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import "./Home.css";

function Home() {
  const techStack = [
    "React",
    "Kubernetes",
    "Terraform",
    "Docker",
    "Azure",
    "Python",
    "ELK Stack",
    "Grafana"
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: SiGithub,
      url: "https://github.com/Shreyam-Saha",
      variant: "default"
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      url: "https://www.linkedin.com/in/shreyam-saha/",
      variant: "default"
    },
    {
      name: "X (Twitter)",
      icon: SiX,
      url: "https://x.com/coder_panda_",
      variant: "default"
    }
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Profile Image Section - Left Side */}
        <div className="avatar-section">
          <div className="profile-image-wrapper">
            <img 
              src={profileImage} 
              alt="Shreyam Saha" 
              className="profile-image"
            />
          </div>
        </div>

        {/* Content Section - Right Side */}
        <div className="content-section">
          {/* Profile Info */}
          <div className="profile-info">
            <h1 className="profile-name">
              Shreyam Saha
            </h1>
            <p className="profile-title">
              Software Developer
            </p>
          </div>

          {/* Bio Section */}
          <div className="bio-section">
            <p className="bio-text">
              Software developer with over 3 years of experience building scalable, 
              efficient solutions. Currently at Amdocs, working with modern cloud 
              technologies and DevOps tools. Microsoft Azure certified with a passion 
              for continuous learning and exploring cutting-edge tech.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack-section">
            <h2 className="section-title">Tech Stack</h2>
            <div className="tech-stack">
              {techStack.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="tech-badge"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <div className="social-buttons">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant={link.variant}
                  size="default"
                  className="social-button"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <link.icon className="social-icon" />
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
