import React from 'react';
import { Card, Col, Row, Typography, Timeline, Image } from 'antd';
import mileStoneSuccess from '../../../assets/images/TeamImage/Milestone-Success.jpg'; // Update the path as needed

const { Title, Paragraph } = Typography;

const HistoryMilestones = () => {
    return (
      <Row>
          <Col span={24}>
            <Card
                bordered={false}
                style={{
                    borderRadius: '10px',
                    padding: '20px',
                    marginTop: '20px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                        <Title
                            level={2}
                            style={{ color: '#00725A', textAlign: 'center' }}
                        >
                            Our History & Milestones
                        </Title>
                        <Timeline style={{ marginTop: '20px' }}>
                            <Timeline.Item color="green">
                                <Title level={5} style={{ color: '#00725A' }}>
                                    2015
                                </Title>
                                <Paragraph>
                                    Company founded and platform launched.
                                </Paragraph>
                            </Timeline.Item>
                            <Timeline.Item color="green">
                                <Title level={5} style={{ color: '#00725A' }}>
                                    2017
                                </Title>
                                <Paragraph>
                                    Expanded to 100 sports facilities.
                                </Paragraph>
                            </Timeline.Item>
                            <Timeline.Item color="green">
                                <Title level={5} style={{ color: '#00725A' }}>
                                    2020
                                </Title>
                                <Paragraph>
                                    Reached 10,000 registered users.
                                </Paragraph>
                            </Timeline.Item>
                            <Timeline.Item color="green">
                                <Title level={5} style={{ color: '#00725A' }}>
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
                                borderRadius: '10px',
                                width: '100%',
                                maxHeight: '300px',
                                objectFit: 'cover',
                            }}
                        />
                    </Col>
                </Row>
            </Card>
        </Col>
      </Row>
    );
};

export default HistoryMilestones;
