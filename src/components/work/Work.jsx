import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import "./Work.css";

function Work() {
  const experiences = [
    {
      period: "Aug 2021 - Present",
      role: "Software Developer",
      company: "Amdocs",
      location: "Pune",
      icon: Briefcase,
      type: "current",
      highlights: [
        "Leveraged Kibana, ElasticSearchDB, Grafana, and Kubernetes in a cloud environment using Azure to manage and monitor microservices.",
        "Developed a Volumetric Alerting Module using Python, SQL, and Elastic DB. This innovative solution provided the client with a new alerting software to efficiently monitor their Microservices architecture.",
        "Demonstrated strong problem-solving skills and the ability to deliver practical and efficient solutions in a modern tech environment.",
        "Achieved 2x Azure Certifications, and working towards more..."
      ],
      tags: ["Kubernetes", "Azure", "Python", "Kibana", "Grafana", "ElasticSearch"]
    },
    {
      period: "Nov 2020 - Jul 2021",
      role: "Intern",
      company: "Telaverge Communications",
      location: "Bangalore",
      icon: TrendingUp,
      type: "completed",
      highlights: [
        "Honed skills in React.js and various front-end tools.",
        "Contributed to developing dynamic user interfaces, enhancing user experience, and collaborating with a talented team.",
        "Significantly boosted proficiency in modern web development technologies and teamwork."
      ],
      tags: ["React.js", "Frontend", "UI/UX", "Team Collaboration"]
    },
    {
      period: "Aug 2017 - Jul 2021",
      role: "Bachelor's Degree in Computer Science & Engineering",
      company: "Siliguri Institute of Technology",
      location: "Siliguri",
      icon: GraduationCap,
      type: "education",
      highlights: [
        "Actively participated in tech sessions and workshops.",
        "Competed in software competitions and hackathons, which honed my skills and fostered a collaborative spirit."
      ],
      tags: ["Computer Science", "Hackathons", "Workshops"]
    }
  ];

  return (
    <div className="work-page">
      <div className="work-content">
        <h1 className="work-title">Work Experience & Education</h1>
        <p className="work-subtitle">My professional journey and learning path</p>
        
        <Separator className="work-separator" />
        
        <div className="timeline">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className={`timeline-dot ${exp.type}`}>
                    <Icon className="timeline-icon" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>
                
                <Card className="experience-card">
                  <CardHeader>
                    <div className="card-header-content">
                      <div>
                        <Badge variant="secondary" className="period-badge">
                          {exp.period}
                        </Badge>
                        <CardTitle className="role-title">{exp.role}</CardTitle>
                        <CardDescription className="company-info">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="highlights-list">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="highlight-item">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="tags-container">
                      {exp.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="tag-badge">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        <Card className="looking-card">
          <CardContent className="looking-content">
            <TrendingUp className="looking-icon" />
            <p className="looking-text">Looking for Opportunities...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Work;
