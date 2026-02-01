import { Card, Skeleton } from "antd";
import {
  LinkOutlined,
  CheckCircleOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
import "./CustomCard.css";

// eslint-disable-next-line react/prop-types
function CustomCard({ title, img, link, status, loading }) {
  const handleCardClick = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="custom-card-container">
      <Card
        loading={loading}
        hoverable
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#2a2b2e",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
        cover={
          !loading && (
            <img
              className="card-img"
              alt="example"
              src={img} // Replace with your image URL
            />
          )
        }
        actions={
          loading
            ? [
                <Skeleton.Button
                  active
                  key="action-skeleton-status"
                  size="small"
                  style={{ width: 80 }}
                />,
                <Skeleton.Button
                  active
                  key="action-skeletion-url"
                  size="small"
                  style={{ width: 80 }}
                />,
              ]
            : [
                <span key="status">
                  {status === "Completed" ? (
                    <>
                      <CheckCircleOutlined
                        style={{ color: "green", margin: "0 5px 0 0" }}
                      />
                      Completed
                    </>
                  ) : (
                    <>
                      <HourglassOutlined
                        style={{ color: "orange", margin: "0 5px 0 0" }}
                      />
                      In Progress
                    </>
                  )}
                </span>,
                <LinkOutlined
                  key="link"
                  onClick={() => handleCardClick(link)}
                  style={{
                    cursor: link ? "pointer" : "not-allowed",
                    opacity: link ? 1 : 0.5,
                  }}
                />,
              ]
        }
      >
        <Card.Meta
          title={
            <span
              style={{
                color: "white",
                display: "block",
                whiteSpace: "normal",
              }}
            >
              {title}
            </span>
          }
        />
      </Card>
    </div>
  );
}

export default CustomCard;
