import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, ExternalLink, Award } from "lucide-react";
import "./Certifications.css";
import certificationCardData from "../../constants/certification";

function Certifications() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="certifications-page">
      <div className="certifications-content">
        <div className="certifications-header">
          <Award className="header-icon" />
          <h1 className="certifications-title">Certifications & Achievements</h1>
          <p className="certifications-subtitle">
            Professional certifications and continuous learning journey
          </p>
        </div>

        <Separator className="certifications-separator" />

        <div className="certifications-grid">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="certification-card">
                <CardHeader>
                  <Skeleton className="cert-image-skeleton" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
                <CardFooter className="card-footer">
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </CardFooter>
              </Card>
            ))
          ) : (
            // Actual certification cards
            certificationCardData.map((cert, index) => (
              <Card key={index} className="certification-card">
                <CardHeader className="cert-header">
                  <div className="cert-image-container">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="cert-image"
                    />
                  </div>
                </CardHeader>

                <CardContent className="cert-content">
                  <CardTitle className="cert-title">{cert.title}</CardTitle>
                  
                  <Badge
                    variant={cert.status === "Completed" ? "default" : "secondary"}
                    className={`status-badge ${cert.status === "Completed" ? "completed" : "in-progress"}`}
                  >
                    {cert.status === "Completed" ? (
                      <>
                        <CheckCircle className="status-icon" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Clock className="status-icon" />
                        In Progress
                      </>
                    )}
                  </Badge>
                </CardContent>

                <CardFooter className="cert-footer">
                  {cert.link ? (
                    <button
                      onClick={() => handleCardClick(cert.link)}
                      className="view-credential-btn"
                    >
                      View Credential
                      <ExternalLink className="btn-icon" />
                    </button>
                  ) : (
                    <div className="no-link-text">Credential pending</div>
                  )}
                </CardFooter>
              </Card>
            ))
          )}
        </div>

        {!loading && (
          <div className="certifications-footer">
            <p className="footer-text">
              More certifications in progress...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certifications;
