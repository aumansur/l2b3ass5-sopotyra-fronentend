import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const worksData = [
  {
    img: "https://miro.medium.com/v2/resize:fit:1170/1*EkdFc8p3mgHaTeNknOBQDg.jpeg", // Replace with actual image URLs
    title: "State-of-the-Art Gym Facilities",
    description:
      "Our gyms are equipped with modern equipment to ensure the best fitness experience for athletes of all levels.",
  },
  {
    img: "https://media.zenfs.com/en/insidermonkey.com/ba9bae5f3f0f14ed7145656628718531", // Replace with actual image URLs
    title: "Professional Sports Arenas",
    description:
      "Our indoor and outdoor arenas host professional-level sports events and training sessions.",
  },
  {
    img: "https://mlsitimqdpb5.i.optimole.com/cb:BSBv.5abaa/w:1000/h:563/q:mauto/f:best/https://shannenswimmingcorp.com/wp-content/uploads/2023/01/Advance-Level-Swimming.jpeg", // Replace with actual image URLs
    title: "Advanced Swimming Pools",
    description:
      "Olympic-standard swimming pools offering the perfect environment for swimming competitions and training.",
  },
];

const OurWorks: React.FC = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <Title className="text-3xl font-semibold text-[#49e0fb]">
          <span className="text-[#49e0fb]">Our Works</span>
        </Title>
        <Text className="text-gray-600 mt-2">
          Explore our world-class sports facilities designed for athletes and
          enthusiasts.
        </Text>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
        {worksData.map((work, index) => (
          <Card
            key={index}
            className="rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300"
            cover={
              <img
                alt={work.title}
                src={work.img}
                className="h-56 object-cover"
              />
            }>
            <div className="p-4">
              <Title level={4} className="text-[#49e0fb]">
                {work.title}
              </Title>
              <Text className="text-gray-600">{work.description}</Text>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
