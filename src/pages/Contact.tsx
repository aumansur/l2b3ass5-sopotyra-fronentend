import React from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Layout,
  Col,
  Row,
  Space,
  Card,
} from "antd";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import ScrollToTopButton from "../components/ui/ScrollToTop/ScrollToTop";

const { Title, Text, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const ContactPage = () => {
  return (
    <Layout>
      {/* Header Section */}
      <Header style={{ background: "#00725A", padding: "0 20px" }}>
        <Title
          level={2}
          style={{ color: "white", margin: 0, textAlign: "center" }}
        >
          Get in Touch
        </Title>
      </Header>

      {/* Main Content Section */}
      <Content style={{ padding: "40px", background: "#f0f2f5" }}>
        <Row gutter={[32, 32]} justify="center">
          {/* Contact Form */}
          <Col xs={24} md={12}>
            <Card
              bordered={false}
              style={{
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Title
                level={3}
                style={{ color: "#00725A", marginBottom: "16px" }}
              >
                Send Us a Message
              </Title>
              <Form layout="vertical">
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email",
                    },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[
                    {
                      required: true,
                    
                      message: "Please enter a valid Subejct",
                    },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="Your Message" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: "#00725A",
                      borderColor: "#00725A",
                      width: "100%",
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col xs={24} md={10}>
            <Card
              bordered={false}
              style={{
                borderRadius: "10px",
                padding: "20px",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Title
                level={3}
                style={{ color: "#00725A", marginBottom: "16px" }}
              >
                Contact Information
              </Title>
              <Paragraph>
                We'd love to hear from you! Reach out to us through any of the
                following means, and we'll get back to you as soon as possible.
              </Paragraph>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div>
                  <MailOutlined
                    style={{ color: "#00725A", fontSize: "24px" }}
                  />
                  <Text style={{ marginLeft: "10px", color: "#333" }}>
                    contact@example.com
                  </Text>
                </div>
                <div>
                  <PhoneOutlined
                    style={{ color: "#00725A", fontSize: "24px" }}
                  />
                  <Text style={{ marginLeft: "10px", color: "#333" }}>
                    +123 456 7890
                  </Text>
                </div>
                <div>
                  <GlobalOutlined
                    style={{ color: "#00725A", fontSize: "24px" }}
                  />
                  <Text style={{ marginLeft: "10px", color: "#333" }}>
                    www.example.com
                  </Text>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
        <ScrollToTopButton></ScrollToTopButton>
      </Content>

      {/* Footer Section */}
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#00725A",
          color: "white",
        }}
      >
        © 2024 Your Company. All Rights Reserved.
      </Footer>
    </Layout>
  );
};

export default ContactPage;
