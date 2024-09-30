import { Button, Col, Form, Row } from "antd";
import Title from "antd/es/typography/Title";

import SFform from "../../components/form/SFform/SFform";
import SFInput from "../../components/form/SFInput/SFinput";

import { useLocation, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const location = useLocation();
  const { selectedTime, facilityId, selectedDate, pricePerHour } =
    location.state || {};
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/pay", {
      state: { pricePerHour, facilityId, selectedDate, selectedTime },
    });
  };

  return (
    <Row justify={"center"} align={"middle"}>
      <Col lg={10} className="p-8 shadow-lg rounded-lg bg-white" sm={12} md={6}>
        <Title level={3}>Create Facility</Title>
        <SFform onSubmit={onSubmit}>
          <Form.Item>
            <SFInput
              type="text"
              disabled={true}
              defaultValue={`${selectedTime.startTime} - ${selectedTime.endTime}`}
              label="Time"
              id="Email"
              name="email"
            />
          </Form.Item>

          <Form.Item>
            <SFInput
              disabled={true}
              defaultValue={selectedDate}
              type="text"
              label="Date"
              id="date"
              name="date"
            />
          </Form.Item>
          {/* Pass data to the Pay page */}

          <Button htmlType="submit">Go for Payment</Button>
        </SFform>
      </Col>
    </Row>
  );
};

export default BookingForm;
