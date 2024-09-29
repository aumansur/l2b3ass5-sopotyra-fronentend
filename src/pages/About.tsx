import React from "react";
import { Card, Timeline, Typography, Avatar, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "John has over 15 years of experience in the sports industry and is passionate about building world-class facilities.",
    img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2280",
  },
  {
    name: "Jane Smith",
    role: "Operations Manager",
    bio: "Jane ensures the smooth operation of all facilities and manages our staff of professionals.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEhBYaldyR_rg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712338616576?e=2147483647&v=beta&t=bziv00oSahHbPawEkrwZwMN3C2ReWGTKRTRhBkro66k",
  },
  {
    name: "Mike Johnson",
    role: "Head of Marketing",
    bio: "Mike is responsible for bringing our services to a global audience and developing innovative campaigns.",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQHAicorH24m_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680284481785?e=2147483647&v=beta&t=WrmMOUYhvDpQR6xnDE1jvTKNdL5sk3uz44xkiHVCt9g",
  },
];

const milestonesData = [
  {
    year: "2015",
    title: "Company Founded",
    description:
      "Our journey began with a vision to revolutionize the sports facility industry.",
  },
  {
    year: "2017",
    title: "First Major Partnership",
    description:
      "We secured our first major partnership, expanding our services across the region.",
  },
  {
    year: "2021",
    title: "International Expansion",
    description:
      "We expanded into international markets to offer world-class sports facilities globally.",
  },
  {
    year: "2023",
    title: "Launched Mobile App",
    description:
      "We launched a mobile app to make facility booking easier for our customers.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="py-10 bg-gray-100">
      {/* Mission Statement Section */}
      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <Title className="text-3xl font-semibold text-[#49e0fb]">
          <span className="text-[#49e0fb]">Our Mission</span>
        </Title>
        <Text className="text-gray-600 mt-2">
          Our mission is to provide world-class sports facilities that empower
          athletes to reach their full potential, while promoting health and
          well-being for all.
        </Text>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-10">
        <Title className="text-center text-3xl font-semibold text-[#49e0fb] mb-6">
          <span className="text-[#49e0fb]"> Meet the Team</span>
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-lg rounded-lg p-6">
              <div className="flex flex-col items-center">
                <Avatar src={member.img} size={120} className="mb-4" />
                <Title level={4} className="text-[#49e0fb]">
                  {member.name}
                </Title>
                <Text className="text-gray-500">{member.role}</Text>
                <Text className="text-gray-600 text-center mt-2">
                  {member.bio}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* History & Milestones */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-10">
        <Title className="text-center text-3xl font-semibold text-[#49e0fb] mb-6">
          <span className="text-[#49e0fb]"> Our History & Milestones</span>
        </Title>
        <Timeline className="bg-white p-6 rounded-lg shadow-lg">
          {milestonesData.map((milestone, index) => (
            <Timeline.Item key={index} className="text-left">
              <Title level={5} className="text-[#49e0fb]">
                {milestone.year}
              </Title>
              <Text className="text-gray-600">{milestone.title}</Text>
              <Text className="text-gray-500">{milestone.description}</Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>

      {/* Contact Information */}
      <div className="bg-[#49e0fb] py-10 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Title className="text-3xl font-semibold text-white">
            Contact Information
          </Title>
          <Space size="large" direction="vertical" className="mt-4">
            <div className="flex items-center justify-center">
              <EnvironmentOutlined className="text-2xl mr-2" />
              <Text>123 Sports Ave, Sirajganj, Bangladesh</Text>
            </div>
            <div className="flex items-center justify-center">
              <PhoneOutlined className="text-2xl mr-2" />
              <Text>+1 (234) 567-8901</Text>
            </div>
            <div className="flex items-center justify-center">
              <MailOutlined className="text-2xl mr-2" />
              <Text>contact@sportyra.com</Text>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
