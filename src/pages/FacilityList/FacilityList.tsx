import React, { useEffect, useState } from "react";
import FacilityCard from "./FacilityListCard";
import { TFacility } from "../../types";
import { Calendar, Col, Form, Pagination, Row, Select } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import Container from "../../Container/Container";
import { useLazyGetAllFacilityQuery } from "../../redux/feature/facillity/facility.auth.api";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../../components/ui/ScrollToTop/ScrollToTop";
import { ScaleLoader } from "react-spinners";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const FacilityList = () => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "";

  const [getFacilities, { data: facilitiesData, isFetching, error }] =
    useLazyGetAllFacilityQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [priceSort, setPriceSort] = useState("");

  useEffect(() => {
    fetchFacilities();
  }, [searchTerm, currentPage, pageSize, priceSort]); // Fetch data on these dependencies

  const fetchFacilities = async () => {
    try {
      const response = await getFacilities({
        searchTerm,
        limit: pageSize,
        page: currentPage,
        sort: priceSort,
      }).unwrap();

      // Log the API response for debugging
      console.log("API response:", response);

      if (response && response.data) {
        console.log("Facilities data:", response.data);
      } else {
        console.warn("No facilities data found in response:", response);
      }
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleChange = (value: string) => {
    setPriceSort(value);
    setCurrentPage(1); // Reset to the first page when sorting changes
  };

  return (
    <Container className="md:mx-8">
      <Row className="mt-8 flex justify-center">
        <Col xs={23} md={7}>
          <div className="w-72 text-center">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>

          <Form.Item
            className="w-2/3"
            layout="vertical"
            label={"Filter By Price"}>
            <Select
              onChange={handleChange}
              showSearch
              placeholder="Select a price range"
              optionFilterProp="label"
              options={[
                {
                  value: "-pricePerHour",
                  label: "Price High to Low",
                },
                {
                  value: "pricePerHour",
                  label: "Price Low to High",
                },
              ]}
            />
          </Form.Item>
        </Col>

        <Col xs={23} md={13}>
          {isFetching ? (
            <ScaleLoader color="#49e0fb" />
          ) : error ? (
            <p>Error fetching facilities: {error.message}</p>
          ) : Array.isArray(facilitiesData?.data?.data) &&
            facilitiesData.data.data.length > 0 ? (
            facilitiesData.data.data.map((facility: TFacility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))
          ) : (
            <p>No facilities available.</p>
          )}
        </Col>

        {/* Pagination */}
        <Pagination
          className="center my-7 flex"
          current={currentPage}
          total={facilitiesData?.data?.total || 0} // Total count from backend
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </Row>

      <ScrollToTopButton />
    </Container>
  );
};

export default FacilityList;
