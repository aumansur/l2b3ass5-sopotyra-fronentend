import React from "react";
import { Form, Input, Button, Typography, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactUs: React.FC = () => {
  // Form submission handler
  const onFinish = (values: any) => {
    console.log("Form values: ", values);
    // Handle form submission, e.g., send to API or backend.
  };

  return (
    <div className="py-10 bg-gray-100">
      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 mb-10">
        <Title className="text-center text-3xl font-semibold text-[#49e0fb] mb-6">
          Get in Touch
        </Title>
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="bg-white p-6 shadow-lg rounded-lg">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}>
            <Input placeholder="Your Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}>
            <Input placeholder="Your Email" />
          </Form.Item>

          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please enter a subject" }]}>
            <Input placeholder="Subject" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}>
            <TextArea rows={4} placeholder="Your Message" />
          </Form.Item>

          <Form.Item className="text-center">
            <Button type="primary" htmlType="submit" className="bg-[#49e0fb]">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Map Integration Section (Updated with Sirajganj location) */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 mb-10">
        <Title className="text-center text-2xl font-semibold text-[#49e0fb] mb-4">
          Our Location
        </Title>
        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            title="Sirajganj, Bangladesh Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.953764765416!2d89.69696371445444!3d24.44962108424767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdcfb62b82cf5f%3A0x5e1a89121e85a9cb!2sSirajganj%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1695553649332!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"></iframe>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="bg-[#49e0fb] py-10 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Title className="text-3xl font-semibold text-white">
            Contact Details
          </Title>
          <Space size="large" direction="vertical" className="mt-4">
            <div className="flex items-center justify-center">
              <EnvironmentOutlined className="text-2xl mr-2" />
              <Text>123 Sports Ave, Sirajganj, Bangladesh</Text>
            </div>
            <div className="flex items-center justify-center">
              <PhoneOutlined className="text-2xl mr-2" />
              <Text>+880 (123) 456-7890</Text>
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

export default ContactUs;
