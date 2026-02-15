import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cloud Infrastructure Automation",
      description: "Automated cloud infrastructure provisioning using Terraform and Azure. Implemented CI/CD pipelines for seamless deployment and infrastructure as code practices.",
      technologies: ["Terraform", "Azure", "Docker", "GitHub Actions"],
      github: "https://github.com/Shreyam-Saha",
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: "Kubernetes Monitoring Dashboard",
      description: "Built a comprehensive monitoring solution for Kubernetes clusters using Grafana, Prometheus, and ELK stack. Real-time metrics and alerts for cluster health.",
      technologies: ["Kubernetes", "Grafana", "Prometheus", "ELK Stack"],
      github: "https://github.com/Shreyam-Saha",
      demo: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "Microservices Architecture",
      description: "Designed and implemented a scalable microservices architecture with service mesh, API gateway, and centralized logging for enterprise applications.",
      technologies: ["Docker", "Kubernetes", "Python", "React"],
      github: "https://github.com/Shreyam-Saha",
      demo: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "DevOps Automation Pipeline",
      description: "Created end-to-end CI/CD pipelines with automated testing, security scanning, and deployment strategies including blue-green and canary deployments.",
      technologies: ["Azure DevOps", "Python", "Docker", "Terraform"],
      github: "https://github.com/Shreyam-Saha",
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: "Log Analytics Platform",
      description: "Developed a centralized log aggregation and analysis platform using ELK stack with custom dashboards and alerting mechanisms.",
      technologies: ["ELK Stack", "Python", "Grafana", "Docker"],
      github: "https://github.com/Shreyam-Saha",
      demo: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "Container Orchestration Solution",
      description: "Implemented a production-ready container orchestration solution with auto-scaling, load balancing, and disaster recovery capabilities.",
      technologies: ["Kubernetes", "Docker", "Azure", "Terraform"],
      github: "https://github.com/Shreyam-Saha",
      demo: null,
      featured: false
    }
  ];

  return (
    <div className="projects-page-container">
      <div className="projects-content">
        <div className="projects-header">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            A collection of my recent work in cloud infrastructure, DevOps automation, and scalable systems
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Card key={project.id} className="project-card">
              <CardHeader>
                <div className="card-header-content">
                  <CardTitle className="project-card-title">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="featured-badge">Featured</Badge>
                  )}
                </div>
                <CardDescription className="project-description">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="tech-tag">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="project-footer">
                <div className="project-links">
                  <Button
                    variant="default"
                    size="sm"
                    className="project-button"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub className="button-icon" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="project-button"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="button-icon" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
