import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Title } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#001529",
        color: "#fff",
        padding: "40px 20px",
      }}>
      <Row justify="space-around" gutter={[32, 32]}>
        {/* About Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#fff" }}>
            About Us
          </Title>
          <Text style={{ color: "#fff" }}>
            We are a premium sports facility dedicated to providing top-notch
            services and venues for athletes of all levels.
          </Text>
        </Col>

        {/* Quick Links Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#fff" }}>
            Quick Links
          </Title>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <a href="/about" style={{ color: "#fff" }}>
                About
              </a>
            </li>
            <li>
              <a href="/services" style={{ color: "#fff" }}>
                Services
              </a>
            </li>
            <li>
              <a href="/contact" style={{ color: "#fff" }}>
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" style={{ color: "#fff" }}>
                FAQ
              </a>
            </li>
          </ul>
        </Col>

        {/* Contact Info Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#fff" }}>
            Contact Info
          </Title>
          <Text style={{ color: "#fff" }}>
            Email: contact@sportsfacility.com
          </Text>
          <br />
          <Text style={{ color: "#fff" }}>Phone: +123 456 7890</Text>
          <br />
          <Text style={{ color: "#fff" }}>
            Location: 123 Sports Avenue, City
          </Text>
        </Col>

        {/* Social Media Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "#fff" }}>
            Follow Us
          </Title>
          <div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <FacebookOutlined
                style={{ fontSize: "24px", color: "#fff", marginRight: "10px" }}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <TwitterOutlined
                style={{ fontSize: "24px", color: "#fff", marginRight: "10px" }}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <InstagramOutlined
                style={{ fontSize: "24px", color: "#fff", marginRight: "10px" }}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <LinkedinOutlined
                style={{ fontSize: "24px", color: "#fff", marginRight: "10px" }}
              />
            </a>
          </div>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "40px" }}>
        <Col>
          <Text style={{ color: "#fff" }}>
            © {new Date().getFullYear()} Sports Facility. All Rights Reserved.
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
