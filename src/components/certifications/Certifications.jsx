import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import CustomCard from "../Card/CustomCard";
import "./Certifications.css";
import certificationCardData from "../../constants/certification";

function Certifications() {
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate a data load with a 2-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <div className="site-card-wrapper">
      <Row gutter={[50, 50]} justify="space-evenly">
        {" "}
        {/* gutter for spacing */}
        {certificationCardData.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
            <CustomCard
              title={card.title}
              img={card.img}
              link={card.link}
              status={card.status}
              loading={loading}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Certifications;
