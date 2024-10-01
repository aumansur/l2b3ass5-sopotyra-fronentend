import { Link, useLocation } from "react-router-dom";
import { Button, Typography } from "antd";
const { Title, Text } = Typography;

const BookingConfirmationPage = () => {
  const location = useLocation();
  const { selectedTime, facilityId, selectedDate } = location.state || {};

  const handlePayment = () => {
    // Handle payment and booking confirmation logic here
  };

  return (
    <div className="p-5">
      <Title level={3}>Booking Confirmation</Title>
      <Text>
        <strong>Facility ID:</strong> {facilityId}
      </Text>
      <br />
      <Text>
        <strong>Date:</strong> {selectedDate}
      </Text>
      <br />
      <Text>
        <strong>Start Time:</strong> {selectedTime?.startTime}
      </Text>
      <br />
      <Text>
        <strong>End Time:</strong> {selectedTime?.endTime}
      </Text>
      <br />
      <div className="mt-4">
        <Link to={"/pay"}>
          <button className="my-primary-btn" onClick={handlePayment}>
            Confirm Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
