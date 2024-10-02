/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Row } from "antd";
import { Typography } from "antd";
import FeaturedFacility from "./FeaturedFacility";
import { TFacility } from "../../../types";
import { useGetAllFacilityQuery } from "../../../redux/feature/facillity/facility.auth.api";
import Container from "../../../Container/Container";

const { Title } = Typography;

const FeaturedFacilities = () => {
  const [searchTerm] = useState("");
  const [limit] = useState(10);
  const [page] = useState(1);
  const { data: featuredFacility } = useGetAllFacilityQuery({
    searchTerm,
    limit,
    page,
  });
  console.log(featuredFacility);

  return (
    <div className="featured-facilities" style={{ padding: "20px" }}>
      <Container>
        <Title className="text-center">
          <span className="text-[#49e0fb]">Featured Facility</span>
        </Title>
        <Row gutter={12}>
          {featuredFacility?.data?.data
            ?.slice(0, 4)
            .map((facility: TFacility) => (
              <FeaturedFacility facility={facility} key={facility._id} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedFacilities;
