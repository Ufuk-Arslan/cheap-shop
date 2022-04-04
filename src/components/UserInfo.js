import React from 'react';
import { Checkbox, Row, Col, Input, Card, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const { Text, Title } = Typography;

const UserInfo = () => {

  const postCardStyle = {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    marginTop: '15px'
  }

  return (
    <Card size="small" style={postCardStyle}>
      <Row>
        <Col span={7} offset={1} align="left">
          <Text><b>Name</b></Text>
          <Input placeholder="Name" size='middle' />
        </Col>
        <Col span={7} offset={1} align="left">
          <Text><b>Surname</b></Text>
          <Input placeholder="Surname" size='middle' />
        </Col>
        <Col span={6} offset={1} align="left">
          <Text><b>Phone Number</b></Text>
          <Input placeholder="Phone Number" size='middle' />
        </Col>
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <Col span={7} offset={1} align="left">
          <Text><b>Province</b></Text>
          <Input placeholder="Province" size='middle' />
        </Col>
        <Col span={7} offset={1} align="left">
          <Text><b>City</b></Text>
          <Input placeholder="City" size='middle' />
        </Col>
        <Col span={6} offset={1} align="left">
          <Text><b>Postal Code</b></Text>
          <Input placeholder="Postal Code" size='middle' />
        </Col>
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <Col span={22} offset={1} align="left">
          <Text><b>Delivery Address</b></Text>
          <TextArea placeholder="Delivery Address" size='middle' />
        </Col>
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <Col span={15} offset={1} align="left">
          <Text><b>Credit Card Number</b></Text>
          <Input placeholder="XXXX-XXXX-XXXX-XXXX" maxLength={16} size='middle' />
        </Col>
        <Col span={6} offset={1} align="left">
          <Text><b>Validation ID</b></Text>
          <Input placeholder="000" maxLength={3} size='middle' />
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col span={15} offset={1} align="left">
          <Checkbox><href>Accept our terms and conditions</href></Checkbox>
          </Col>
      </Row>
    </Card>
  );
};

export default UserInfo;