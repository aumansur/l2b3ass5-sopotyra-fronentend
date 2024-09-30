import { useEffect, useState } from "react";
import FacilityCard from "./FacilityListCard";
import { TFacility } from "../../types";
import { Calendar, Col, Form, Pagination, Row, Select } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import Container from "../../Container/Container";
import { useLazyGetAllFacilityQuery } from "../../redux/feature/facillity/facility.auth.api";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../../components/ui/ScrollToTop/ScrollToTop";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const FacilityList = () => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "";

  const [getFacilities] = useLazyGetAllFacilityQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [priceSort, setPriceSort] = useState("");

  const [allFacilities, setAllFacilities] = useState<TFacility[]>([]);

  useEffect(() => {
    getFacilities({ searchTerm, limit: 1000, page: 1, sort: priceSort })
      .unwrap()
      .then((response) => setAllFacilities(response.data))
      .catch((error) => console.error("Error fetching facilities:", error));
  }, [searchTerm, getFacilities, priceSort]);
  const currentFacilities = allFacilities.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setPriceSort(value);
  };

  return (
    <Container className="md:mx-8 mx-auto">
      <Row className="mt-8 flex justify-center">
        <Col xs={23} md={7} className="">
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
              placeholder="Select a person"
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
          {currentFacilities.map((facility) => (
            <FacilityCard key={facility._id} facility={facility} />
          ))}
        </Col>
        <Pagination
          className="center my-7 flex "
          current={currentPage}
          total={allFacilities.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </Row>

      <ScrollToTopButton></ScrollToTopButton>
      {/* Pagination Component */}
    </Container>
  );
};

export default FacilityList;
