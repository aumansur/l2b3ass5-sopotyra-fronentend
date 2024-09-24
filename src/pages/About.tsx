import React from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Button,
  Timeline,
  Image,
  Divider,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import image1 from "../assets/contact.png";
import team1 from "../assets/images/TeamImage/team1.jpg";
import team2 from "../assets/images/TeamImage/team2.jpg";
import team3 from "../assets/images/TeamImage/team3.jpg";
import mileStoneSuccess from "../assets/images/TeamImage/Milestone-Success.jpg";
import ScrollToTopButton from "../components/ui/ScrollToTop/ScrollToTop";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const AboutPage = () => {
  return (
    <Layout>
      {/* Header Section */}
      <Header
        style={{
          background: "#00725A",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <Title level={2} style={{ color: "white", margin: 0 }}>
          About Us
        </Title>
      </Header>

      {/* ====================Content Section===================== */}
      <Content style={{ padding: "40px", background: "#f0f2f5" }}>
        <Row gutter={[32, 32]} justify="center">
          {/* Welcome Section */}
          <Col span={24}>
            <Card
              bordered={false}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Title
                level={3}
                style={{ color: "#00725A", textAlign: "center" }}
              >
                Welcome to Our Sports Facility Booking Platform
              </Title>
              <Paragraph
                style={{
                  fontSize: "16px",
                  textAlign: "center",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                Our platform connects sports enthusiasts with top facilities,
                making it easy to find and book your preferred sports venue with
                just a few clicks. Whether you're looking for a football pitch,
                tennis court, or swimming pool, we have the right place for you.
              </Paragraph>
            </Card>
          </Col>

          {/*====================== Mission Statement================ */}
          <Col xs={24} md={12}>
            <Image
              src={image1}
              alt="Sports Facility"
              style={{
                borderRadius: "10px",
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card
              bordered={false}
              style={{
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Title level={4} style={{ color: "#00725A" }}>
                Our Mission
              </Title>
              <Paragraph>
                Our mission is to provide a seamless booking experience for
                sports enthusiasts, promoting active lifestyles by connecting
                people to quality sports facilities. We aim to make sports more
                accessible to everyone.
              </Paragraph>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#00725A",
                  borderColor: "#00725A",
                  color: "white",
                }}
              >
                Explore Facilities
              </Button>
            </Card>
          </Col>

          {/* =====================Vision Section ==================*/}
          <Col span={24}>
            <Card
              bordered={false}
              style={{
                borderRadius: "10px",
                padding: "20px",
                marginTop: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Title level={4} style={{ color: "#00725A" }}>
                    Our Vision
                  </Title>
                  <Paragraph>
                    We envision a world where everyone has access to the sports
                    facilities they need, regardless of location. By making
                    bookings easier, we hope to inspire more people to
                    participate in sports and enjoy a healthier lifestyle.
                  </Paragraph>
                </Col>
                <Col xs={24} md={12}>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_d-wRErGFunnl5ZnDN4_H5xApabswm7HH8Q&s"
                    alt="Active Lifestyle"
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Team Section */}
          <Col span={24}>
            <Card
              bordered={false}
              style={{
                borderRadius: "10px",
                padding: "20px",
                marginTop: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Title
                level={2}
                style={{ color: "#00725A", textAlign: "center" }}
              >
                Our Team
              </Title>
              <Row gutter={[16, 16]} justify="center">
                <Col xs={24} md={8}>
                  <Card
                    hoverable
                    cover={<Image src={team1} alt="Team Member" />}
                    bordered={false}
                  >
                    <Title
                      level={5}
                      style={{ color: "#00725A", textAlign: "center" }}
                    >
                      John Doe
                    </Title>
                    <Paragraph style={{ textAlign: "center" }}>
                      CEO & Founder
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card
                    hoverable
                    cover={<Image src={team2} alt="Team Member" />}
                    bordered={false}
                  >
                    <Title
                      level={5}
                      style={{ color: "#00725A", textAlign: "center" }}
                    >
                      Jane Smith
                    </Title>
                    <Paragraph style={{ textAlign: "center" }}>CTO</Paragraph>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card
                    hoverable
                    cover={<Image src={team3} alt="Team Member" />}
                    bordered={false}
                  >
                    <Title
                      level={5}
                      style={{ color: "#00725A", textAlign: "center" }}
                    >
                      Alice Johnson
                    </Title>
                    <Paragraph style={{ textAlign: "center" }}>
                      Marketing Director
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* History & Milestones Section */}
          <Col span={24}>
            <Card
              bordered={false}
              style={{
                borderRadius: "10px",
                padding: "20px",
                marginTop: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Title
                    level={4}
                    style={{ color: "#00725A", textAlign: "center" }}
                  >
                    Our History & Milestones
                  </Title>
                  <Timeline style={{ marginTop: "20px" }}>
                    <Timeline.Item color="green">
                      <Title level={5} style={{ color: "#00725A" }}>
                        2015
                      </Title>
                      <Paragraph>
                        Company founded and platform launched.
                      </Paragraph>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                      <Title level={5} style={{ color: "#00725A" }}>
                        2017
                      </Title>
                      <Paragraph>Expanded to 100 sports facilities.</Paragraph>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                      <Title level={5} style={{ color: "#00725A" }}>
                        2020
                      </Title>
                      <Paragraph>Reached 10,000 registered users.</Paragraph>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                      <Title level={5} style={{ color: "#00725A" }}>
                        2023
                      </Title>
                      <Paragraph>
                        Launched mobile app for easier booking.
                      </Paragraph>
                    </Timeline.Item>
                  </Timeline>
                </Col>
                <Col xs={24} md={12}>
                  <Image
                    src={mileStoneSuccess}
                    alt="Company Milestones"
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Contact Information Section */}
          <Col span={24}>
            <Card
              bordered={false}
              style={{
                borderRadius: "10px",
                padding: "20px",
                marginTop: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Title
                level={4}
                style={{ color: "#00725A", textAlign: "center" }}
              >
                Contact Us
              </Title>
              <Row gutter={[16, 16]} justify="center">
                <Col xs={24} md={8}>
                  <Card bordered={false}>
                    <MailOutlined
                      style={{ fontSize: "24px", color: "#00725A" }}
                    />
                    <Paragraph style={{ marginTop: "10px", color: "#00725A" }}>
                      Email: info@sportsbooking.com
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card bordered={false}>
                    <PhoneOutlined
                      style={{ fontSize: "24px", color: "#00725A" }}
                    />
                    <Paragraph style={{ marginTop: "10px", color: "#00725A" }}>
                      Phone: +1 (800) 123-4567
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card bordered={false}>
                    <EnvironmentOutlined
                      style={{ fontSize: "24px", color: "#00725A" }}
                    />
                    <Paragraph style={{ marginTop: "10px", color: "#00725A" }}>
                      Address: 1234 Sports Ave, New York, NY 10001
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer Section */}
      <Footer
        style={{
          background: "#00725A",
          textAlign: "center",
          color: "white",
          padding: "20px 50px",
        }}
      >
        Sports Facility Booking Platform ©2024 Created by Nazmul Hasan Shadin
      </Footer>
      <ScrollToTopButton></ScrollToTopButton>
    </Layout>
  );
};

export default AboutPage;
