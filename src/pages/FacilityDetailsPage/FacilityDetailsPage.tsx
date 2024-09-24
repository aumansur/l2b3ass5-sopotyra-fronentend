import React, { useState, useEffect } from "react";
import { Button, Calendar, Card, Col, Rate, Row, Space, Typography } from "antd";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { useCheckFacilityAvailabilityQuery, useGetSingleFacilityQuery } from "../../redux/feature/facillity/facility.auth.api";
import FacilityBanner from "../../components/ui/FacilityBanner/FacilityBanner";
import dayjs, { Dayjs } from 'dayjs';

const { Title, Text } = Typography;

interface TimeSlot {
  _id: string;
  startTime: string;
  endTime: string;
}

const FacilityDetailsPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { facilityId } = useParams<{ facilityId: string }>();
  const [selectedTime, setSelectedTime] = useState<{
    startTime: string;
    endTime: string;
  } | null>(null);
  const [shouldFetchSlots, setShouldFetchSlots] = useState<boolean>(false);

  const navigate = useNavigate();

  const dataParams = {
    date: selectedDate,
    facility: facilityId,
  };

  const { data: singleFacility, isLoading: singleFacilityLoading } =
    useGetSingleFacilityQuery(facilityId);

  const { data: availableSlot, isLoading, refetch } = useCheckFacilityAvailabilityQuery(
    dataParams,
    {
      skip: !selectedDate || !shouldFetchSlots,
    }
  );

  useEffect(() => {
    if (shouldFetchSlots) {
      const intervalId = setInterval(() => {
        refetch();
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [shouldFetchSlots, refetch]);

  if (isLoading || singleFacilityLoading) {
    return <h2>Loading...</h2>;
  }

  const onPanelChange = (value:Dayjs) => {
    const formattedDate = value.format("YYYY-MM-DD");
    setSelectedDate(formattedDate);
  };

  const handleTimeSelection = (slot: TimeSlot) => {
    setSelectedTime({ startTime: slot.startTime, endTime: slot.endTime });
  };

  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select a time slot before booking.");
      return;
    }

    // Clear the selected time and refetch available slots
    setSelectedTime(null);
    setShouldFetchSlots(false);
    refetch();

    navigate("/bookingForm", {
      state: {
        selectedTime,
        facilityId,
        selectedDate,
        pricePerHour: singleFacility?.data?.pricePerHour,
      },
    });
  };

  const handleCheckAvailableSlots = () => {
    if (!selectedDate) {
      alert("Please select a date first.");
      return;
    }
    setShouldFetchSlots(true);
  };

  return (
    <div className="p-5">
      <Row gutter={16}>
        <Col xs={24} md={16}>
          <Card>
            <div>
              <Title level={3}>{singleFacility?.data?.name}</Title>
              <div className="flex items-center gap-3">
                <Rate className="text-sm" defaultValue={2}></Rate>
                <Text>33 (Reviews)</Text>
                <div className="flex items-center gap-1">
                  <FaLocationCrosshairs /> {singleFacility?.data?.location}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Title level={5}>Pitch Type: Turf, Venue Type: Outdoor</Title>
              <Text>Opening Hours: 04:00 PM - 11:59 PM</Text>
              <Text className="block mt-4">
                {singleFacility?.data?.description}
              </Text>
              <Text className="block mt-2 font-bold text-orange-400">
                Price: ${singleFacility?.data?.pricePerHour} per hour
              </Text>
            </div>

            <FacilityBanner image1={singleFacility?.data?.image} image2={''}></FacilityBanner>
          </Card>
        </Col>
        <Col className="border-green-600" xs={24} md={8}>
          <Card>
            <div className="text-center">
              <Title level={4}>Book a Field on Soccer World</Title>
              <Text>Select date and duration to show available slots</Text>
            </div>
            <div className="w-[300px]">
              <Calendar
                onChange={onPanelChange}
                fullscreen={false}
                className="mt-10"
                style={{
                  borderColor: '#00725A', // Accent color for borders and highlights
                }}
              />
            </div>
            <div className="mt-10 space-y-[14px]">
              <Text className="block">Match Duration</Text>
              <Space direction="horizontal">
                <Button className="bg-primary" type="primary">
                  90 Min
                </Button>
                <Button type="default">9 Min</Button>
              </Space>
              <Button
                onClick={handleCheckAvailableSlots}
                htmlType="submit"
                className="bg-secondary w-full text-white"
              >
                Show Available Slots
              </Button>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={24}>
          <Title className="text-center" level={3}>
            Available Time
          </Title>
          <div className="space-y-4">
            {availableSlot?.data && availableSlot.data.length > 0 ? (
              <div>
                <Row
                  justify="center"
                  align="middle"
                  gutter={[22, 0]}
                  className="responsive-available-time"
                >
                  {availableSlot.data.map((slot: TimeSlot) => (
                    <Col
                      xs={12}
                      sm={8}
                      md={6}
                      lg={4}
                      key={slot._id}
                      className="mb-4"
                    >
                      <Button
                        onClick={() => handleTimeSelection(slot)}
                        type="primary"
                        className={`bg-secondary w-full ${
                          selectedTime &&
                          selectedTime.startTime === slot.startTime &&
                          selectedTime.endTime === slot.endTime
                            ? "selected"
                            : ""
                        }`}
                      >
                        {`${slot.startTime} - ${slot.endTime}`}
                      </Button>
                    </Col>
                  ))}
                </Row>
                <div className="flex justify-center mt-8">
                  <Button
                    type="primary"
                    className="bg-primary text-white"
                    onClick={handleBooking}
                    disabled={!selectedTime}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ) : (
              <Text>No available slots for the selected date.</Text>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FacilityDetailsPage;
