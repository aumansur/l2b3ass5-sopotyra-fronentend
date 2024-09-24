import { Button, Card, Col, Rate } from "antd";
import { Link } from "react-router-dom";
import { TFacility } from "../../../types";

type TFacilityProps = {
  facility: {
    _id: string;
    name: string;
    description: string;
    pricePerHour: number;
    image?: string | undefined;
    location: string;
    isDeleted: boolean;
  };
};

const FeaturedFacility = ({ facility }: TFacilityProps) => {
  const { name, description, _id, image } = facility;

  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        cover={
          <img
            alt={name}
            src={image || "https://via.placeholder.com/300"}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
        }
        style={{
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Card.Meta
          title={
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{name}</span>
              <Rate
                className="text-sm"
                allowHalf
                defaultValue={3}
                disabled
              />
            </div>
          }
          description={
            <div className="text-gray-600 mt-2" style={{
              height: '4.5em', /* Approximate height for 3 lines */
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              textOverflow: 'ellipsis'
            }}>
              {description}
            </div>
          }
        />
        <Link to={`/facility/${_id}`}>
          <Button
            type="primary"
            block
            className="bg-primary text-white mt-4 hover:bg-green-700"
            style={{ borderRadius: "4px", padding: "8px 0" }}
          >
            View Details
          </Button>
        </Link>
      </Card>
    </Col>
  );
};

export default FeaturedFacility;
