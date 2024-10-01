import { Card } from "antd";
import {
  CheckCircleOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import Container from "../../../Container/Container";

const HowItWorks = () => {
  return (
    <Container>
      <div className="how-it-works-section bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center text-[#49E0FB] mb-8">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-12">
          A simple guide to booking your favorite sports facilities in just a
          few steps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Step 1 */}
          <Card
            hoverable
            className="shadow-lg border-none"
            cover={
              <CheckCircleOutlined className="text-[#49E0FB] text-6xl m-auto mt-8" />
            }>
            <h3 className="text-xl font-semibold text-center mt-4">
              Step 1: Register or Login
            </h3>
            <p className="text-center text-gray-600">
              Sign up or log in to your account to get started.
            </p>
          </Card>

          {/* Step 2 */}
          <Card
            hoverable
            className="shadow-lg border-none"
            cover={
              <CalendarOutlined className="text-[#49e0fb] text-6xl m-auto mt-8" />
            }>
            <h3 className="text-xl font-semibold text-center mt-4">
              Step 2: Select a Date
            </h3>
            <p className="text-center text-gray-600">
              Choose your preferred date and time slot from the calendar.
            </p>
          </Card>

          {/* Step 3 */}
          <Card
            hoverable
            className="shadow-lg border-none"
            cover={
              <CreditCardOutlined className="text-[#49e0fb] text-6xl m-auto mt-8" />
            }>
            <h3 className="text-xl font-semibold text-center mt-4">
              Step 3: Confirm and Pay
            </h3>
            <p className="text-center text-gray-600">
              Review your booking details and complete the payment securely.
            </p>
          </Card>

          {/* Step 4 */}
          <Card
            hoverable
            className="shadow-lg border-none"
            cover={
              <SmileOutlined className="text-[#49e0fb] text-6xl m-auto mt-8" />
            }>
            <h3 className="text-xl font-semibold text-center mt-4">
              Step 4: Enjoy Your Game
            </h3>
            <p className="text-center text-gray-600">
              Show up at the venue and enjoy your booked facility!
            </p>
          </Card>
        </div>
        <div className="text-center mt-12">
          <button className="my-primary-btn">Get Started</button>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
