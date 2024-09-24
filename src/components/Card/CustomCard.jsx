import { Card } from "antd";
import {
  LinkOutlined,
  CheckCircleOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
import "./CustomCard.css";

// eslint-disable-next-line react/prop-types
function CustomCard({ title, description, img, link, status, loading }) {
  const handleCardClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
    // Open the link in a new tab
  };

  return (
    <Card
      className="custom-card-container"
      loading={loading} // Show skeleton while loading
      hoverable
      style={{ width: "100%", minWidth: 250, minHeight: 300 }}
      cover={
        !loading && (
          <img
            className="card-img"
            alt="example"
            src={img} // Replace with your image URL
          />
        )
      }
      actions={[
        status === "Completed" ? (
          <span key="status">
            <CheckCircleOutlined style={{ color: "green" }} /> Completed
          </span>
        ) : (
          <span key="status">
            <HourglassOutlined style={{ color: "orange" }} /> In Progress
          </span>
        ),

        <LinkOutlined
          key="link"
          onClick={() => handleCardClick(link)}
          style={{
            cursor: link ? "pointer" : "not-allowed",
            opacity: link ? 1 : 0.5,
          }}

          // Add click action
        />,
      ]}
    >
      <Card.Meta
        title={title}
        description={description} // Replace with your description
      />
    </Card>
  );
}

export default CustomCard;
