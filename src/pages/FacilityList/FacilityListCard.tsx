import { Card, Col, Row, Typography, Button } from "antd";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

type TFacilityProps = {
  facility: {
    _id: string;
    name: string;
    description: string;
    pricePerHour: number;
    location: string;
    image?: string;
    isDeleted: boolean;
  };
};

const FacilityCard = ({ facility }: TFacilityProps) => {
  const { name, pricePerHour, image, _id } = facility;

  return (
    <Col>
      <Card
        hoverable
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          padding: 4,
          border: "1px solid #e8e8e8",
        }}
        bodyStyle={{ padding: "12px 16px" }}>
        <Row gutter={16} align="middle" className="flex gap-4">
          {/* Image Section */}
          <Col xs={7} md={8}>
            <img
              src={image}
              alt={name}
              style={{ width: "100%", height: "160px", objectFit: "contain" }}
            />
          </Col>
          {/* Content Section */}
          <Col xs={12} md={12}>
            <div className="flex flex-col justify-between h-full space-y-6">
              <div className="flex justify-between items-center mb-1">
                <Title level={5} className="mb-0">
                  {name}
                </Title>
                <div className="flex items-center">
                  <Text className="font-bold"> ${pricePerHour}</Text>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <Text className="mr-2">1 Pitches</Text>
                <FaUserFriends size={18} /> <Text>6v6</Text>
              </div>

              <Link to={`/facility/${_id}`}>
                <button
                  className="my-primary-btn-outline"
                  style={{
                    padding: "0 10px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}>
                  View Details
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default FacilityCard;
