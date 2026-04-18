import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cluster Companion",
      description: "Enterprise-grade Kubernetes cluster monitoring dashboard with real-time metrics, multi-cluster support, and comprehensive health tracking. Features dark/light themes, resource utilization gauges, deployment monitoring, and deep-dive analytics across nodes, pods, and services.",
      technologies: ["React", "Recharts", "Tailwind CSS", "Kubernetes", "Node.js"],
      demo: "https://cluster-companion-ten.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Carwise",
      description: "Enterprise-grade Kubernetes cluster monitoring dashboard with real-time metrics, multi-cluster support, and comprehensive health tracking. Features dark/light themes, resource utilization gauges, deployment monitoring, and deep-dive analytics across nodes, pods, and services.",
      technologies: ["React", "Express JS", "Supabase", "Tailwind CSS"],
      demo: "https://car-wise-shreyam-sahas-projects.vercel.app/",
      featured: true
    }
  ];

  return (
    <div className="projects-page-container">
      <div className="projects-content">
        <div className="projects-header">
          <h1 className="projects-title">Featured Projects</h1>
          <p className="projects-subtitle">
            Showcasing my work in Kubernetes monitoring, cloud-native applications, and full-stack web development
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
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="button-icon" />
                      View Demo
                    </a>
                  </Button>
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
