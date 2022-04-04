import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import './App.css';
import Products from './components/Products';
import UserInfo from './components/UserInfo';
import { Row, Space, Col, Divider, Anchor, Button, Card, Typography, Tag, message } from 'antd';
import { CheckCircleOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const postCardStyle = {
  width: '100%',
  backgroundColor: '#f8f8f8',
  borderRadius: '20px'
}

function App() {

  useEffect(() => {
    setItems([{ id: 0 }])
  }, [])

  const removeItem = async (key) => {
    if (items.length < 2) {
      message.error('Very last item cannot be removed!');
      return
    }
    //setItems(items.filter(item => item.id !== key));
    setTotalCost(toatlCost - lastItemCost)
    setLastItemCost()
    setItems(items.slice(0, -1));
    message.info('Last Item Removed!');
  }

  const completeTransaction = async () => {
    message.success('Transaction Complete!');
  }

  const addItem = async () => {
    setItems([...items, { id: itemCounter + 1 }])
    setItemCounter(itemCounter + 1)
  }

  const onCostChange = async (updateCost) => {
    setTotalCost(toatlCost + updateCost)
  }

  const [items, setItems] = useState([{ id: 0 }])
  const [itemCounter, setItemCounter] = useState(0)
  const [toatlCost, setTotalCost] = useState(0)
  const [lastItemCost, setLastItemCost] = useState(0)

  return (
    <Card id="root" size="small" style={postCardStyle}>
      <Anchor>
        <Col span={3} offset={21} align="right">
          <Card id="root" size="small" style={{ marginTop: '10px', width: '100%', borderRadius: '20px' }}>
            <Col align="middle">
              <Text style={{ fontSize: '20px' }}><b>Total Cost</b></Text>
            </Col>
            <Col align="middle">
              <Tag color="blue" style={{ fontSize: '30px', padding: '10px', marginRight: '0px', marginBottom: '10px' }}><b>{(toatlCost).toFixed(2)} $</b></Tag>
            </Col>
          </Card>
        </Col>
      </Anchor>
      <Row>
        <Col span={24} align="middle">
          <Title level={2} strong="true"><b>Cheap Shop</b></Title>
        </Col>
        <Col span={20} offset={2} align="middle" style={{ marginTop: '20px' }}>
          {items.length > 0 ?
            <Products items={items} removeItem={removeItem} onCostChange={onCostChange} /> :
            <></>
          }
          <Button
            type="primary"
            style={{ marginTop: '15px' }}
            shape="round" icon={<PlusOutlined />}
            size={'large'}
            onClick={() => addItem()}>
            Add New Item
          </Button>
          {/* <Button
            type="secondary"
            style={{ marginTop: '15px', marginLeft: '15px' }}
            shape="round" icon={<MinusCircleOutlined />}
            size={'large'}
            onClick={() => removeItem()}>
            Remove Last Item
          </Button> */}
          <Divider dashed />
          <UserInfo />
          <Space size={'0px'}>
            <Tag color="blue" style={{ fontSize: '30px', padding: '10px', margin: '15px' }}><b>{(toatlCost).toFixed(2)} $</b></Tag>
            <Button
              type="primary"
              shape="round"
              icon={<CheckCircleOutlined />}
              size={'large'}
              onClick={() => completeTransaction()}>
              Complete Transaction
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

export default App;