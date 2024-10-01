import React from "react";
import { Carousel, Typography, Card } from "antd";
import "antd/dist/reset.css";
import Container from "../../../Container/Container";

const { Title, Text } = Typography;

const testimonialsData = [
  {
    id: 1,
    image:
      "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
    name: "John Doe",
    feedback:
      "The sports facilities are amazing! Booking was easy and the staff was very professional. Highly recommend it to anyone.",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1150254232/photo/headshot-of-smiling-european-caucasian-business-man-with-haircut-and-glasses-isolated-on.jpg?s=612x612&w=0&k=20&c=-gJPo-MGTk2lGTQ0rtLn7dRZHBUV8UymdcRH1b1ye9A=",
    name: "Jane Smith",
    feedback:
      "Had a fantastic experience! The venue was clean and well-maintained. Booking my slot was hassle-free!",
  },
  {
    id: 3,
    image:
      "https://thumbs.dreamstime.com/b/ill-take-my-hat-off-you-studio-shot-beautiful-young-woman-smiling-against-brown-background-ill-take-my-hat-off-you-267544065.jpg",
    name: "Michael Jemmy",
    feedback:
      "Top-notch facilities and great customer service. Will definitely be using this service again!",
  },
];

const styles = {};

const TestimonialsSlider: React.FC = () => {
  return (
    <Container>
      <div className="py-10 bg-[#F3F4F6]">
        <Title className="text-center text-3xl  font-semibold mb-10">
          <span className="text-[#49E0fb] ">Customer Reviews</span>
        </Title>

        <Carousel
          arrows={true}
          infinite={true}
          autoplay
          style={styles}
          className="w-full max-w-4xl mx-auto bg-gray-">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center text-center">
              <Card className="w-full bg-gray-200 rounded-lg shadow-lg p-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
                <Title level={4} className="font-medium">
                  {testimonial.name}
                </Title>
                <Text className="italic text-gray-600 mt-2">
                  {testimonial.feedback}
                </Text>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default TestimonialsSlider;
