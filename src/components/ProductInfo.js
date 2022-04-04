import React, { useState } from 'react';
import { Row, Col, Form, Input, InputNumber, Space, Image, Card, Typography, Tag } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const ProductInfo = (props) => {

  // Mock database for our products
  const [products, setProducts] = useState([
    {
      code: '1234567',
      name: 'Kids Chair',
      options: [
        {
          index: 0,
          price: 9.99,
          stock: 20,
          optionName: 'Blue',
          optionImageUrls: [
            'https://www.ikea.com/gb/en/images/products/mammut-childrens-chair-in-outdoor-blue__0727922_pe735928_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/mammut-childrens-chair-in-outdoor-blue__0876233_pe687089_s5.jpg?f=xl',
            'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-blue__0876228_pe660083_s5.jpg?f=xl',
            'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-blue__0730604_ph158726_s5.jpg?f=xl',
          ]
        },
        {
          index: 1,
          price: 11.99,
          stock: 10,
          optionName: 'Pink',
          optionImageUrls: [
            'https://www.ikea.com/gb/en/images/products/mammut-childrens-chair-in-outdoor-pink__0727923_pe735930_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/mammut-childrens-chair-in-outdoor-pink__0876701_pe687088_s5.jpg?f=xl',
            'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-pink__0876697_pe660085_s5.jpg?f=xl',
            'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-pink__0730604_ph158726_s5.jpg?f=xl'
          ]
        },
        {
          index: 2,
          price: 14.99,
          stock: 0,
          optionName: 'Red',
          optionImageUrls: [
            'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-red__0727924_pe735940_s5.jpg?f=xl',
            'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-red__0876255_pe687087_s5.jpg?f=xl',
            'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-red__0876246_pe660087_s5.jpg?f=xl',
            'https://www.ikea.com/us/en/images/products/mammut-childrens-chair-indoor-outdoor-red__0664693_ph149888_s5.jpg?f=xl'
          ]
        }
      ]
    },
    {
      code: '111A111',
      name: 'Book Shelf',
      options: [
        {
          index: 0,
          price: 54.99,
          stock: 3,
          optionName: 'Black',
          optionImageUrls: [
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-black-brown__0625059_pe692080_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-black-brown__1094438_pe863433_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-black-brown__1084852_pe859912_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-black-brown__1084771_pe859856_s5.jpg?f=xl',
          ]
        },
        {
          index: 1,
          price: 44.99,
          stock: 0,
          optionName: 'Wood',
          optionImageUrls: [
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-white-stained-oak-effect__0459248_pe606048_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-white-stained-oak-effect__1106847_pe868821_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-white-stained-oak-effect__1084853_pe859914_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-white-stained-oak-effect__1084772_pe859858_s5.jpg?f=xl'
          ]
        },
        {
          index: 2,
          price: 49.99,
          stock: 5,
          optionName: 'White',
          optionImageUrls: [
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-white__0627095_pe693171_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-white__1106846_pe868822_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-white__1084854_pe859913_s5.jpg?f=xl',
            'https://www.ikea.com/gb/en/images/products/kallax-shelving-unit-white__1084773_pe859857_s5.jpg?f=xl'
          ]
        }
      ]
    },
  ])

  const [selectedItem, setSelectedItem] = useState(-1)
  const [selectedOption, setSelectedOption] = useState(0)
  const [cost, setCost] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [itemCode, setItemCode] = useState('')
  const [displayImage, setDisplayImage] = useState('')

  const postCardStyle = {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '20px',
    marginTop: '5px'
  }

  // Updates total cost of the selected product on changing quantity
  const updateTotal = async (values) => {
    props.onCostChange((values - quantity) * products[selectedItem]['options'][selectedOption]['price'])
    setQuantity(values)
    if (selectedItem > -1) {
      setCost(products[selectedItem]['options'][selectedOption]['price'])
    }
  }

  // Handles product option change action
  const changeOption = async (value) => {
    props.onCostChange(products[selectedItem]['options'][value]['price'] - (quantity * products[selectedItem]['options'][selectedOption]['price']))
    setSelectedOption(value)
    setQuantity(1)
    setDisplayImage(products[selectedItem]['options'][value]['optionImageUrls'][0])
    setCost(products[selectedItem]['options'][value]['price'])
  }

  // Checks whether the code exists and updates the product fields
  const checkCode = async (value) => {
    if (selectedItem > -1) {
      props.onCostChange(-quantity * products[selectedItem]['options'][selectedOption]['price'])
    }
    setItemCode(value.target.value)
    let index = products.findIndex(p => p.code == value.target.value)
    if (index > -1) {
      props.onCostChange(products[index]['options'][0]['price'])
      setSelectedItem(index)
      setCost(products[index]['options'][0]['price'])
      setQuantity(1)
      setDisplayImage(products[index]['options'][0]['optionImageUrls'][0])
    } else {
      setSelectedItem(-1)
      setCost(0)
      setQuantity(1)
      setDisplayImage('')
    }
    setSelectedOption(0)
  }

  return (
    <Card size="small" style={postCardStyle}>
      <Row>
        <Col span={14} offset={1} align='right'>
          <Row>
            {selectedItem == -1 && 
            <Col span={16} offset={0} align="left">
              <Text><i>Please enter the code of the item you want to purchase from the catalog provided.</i></Text>
            </Col>
            }
            <Col span={16} offset={0} align="left">
              <Text><b>Item Code</b></Text>
              <Form.Item>
                <Input placeholder="Item Code" maxLength={7} size='middle' onChange={(value) => { checkCode(value) }} />
              </Form.Item>
            </Col>
            {selectedItem > -1 &&
            <Col span={7} offset={1} align="left">
              <Text><b>Quantity</b></Text>
              <Form.Item>
                <InputNumber min={1} max={selectedItem > -1 ? products[selectedItem]['options'][selectedOption]['stock'] : 1} defaultValue={1} onChange={updateTotal} />
              </Form.Item>
            </Col>
            }
          </Row>
          {selectedItem > -1 &&
          <>
          <Row>
            <Col span={16} offset={0} align="left">
              <Text><b>Single Item Cost </b></Text>
              <Tag color="green" style={{ fontSize: '14px' }}><b>{cost} $</b></Tag>
            </Col>
            <Col span={7} offset={1} align="left">
              <Text><b>Sum Cost </b></Text>
              <Tag color="green" style={{ fontSize: '14px' }}><b>{(cost * quantity).toFixed(2)} $</b></Tag>
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col span={24} offset={0} align="left"><Text><b>Options</b></Text></Col>

            <Space size='small'>
              {selectedItem > -1 ? products[selectedItem]['options'].map(opt => {
                return (<>
                <Col span={24} offset={0} align="left">
                <Image
                  style={{ cursor: opt.stock < 1 ? 'not-allowed' : 'pointer', border: selectedOption == opt.index ? 'solid 3px #1890ff' : 'solid 1px grey' }}
                  onClick={() => {
                    if(opt.stock < 1) return;
                    changeOption(opt['index'])
                  }}
                  width={100}
                  preview={false}
                  src={opt['optionImageUrls'][0]}
                />
                <Col span={24} offset={0} align="middle">{opt.stock < 1 ? <>Sold Out</> : <>{opt.stock} in Stock</>}</Col>
                </Col>
                
                </>
                )
              }) : <></>}
            </Space>
          </Row>
          </>
          }
        </Col>
        <Col span={6} offset={1}>
          <Space direction="vertical" size='0px'>
            <Title level={3}>{selectedItem > -1 ? products[selectedItem]['name'] + ' - ' + products[selectedItem]['options'][selectedOption]['optionName'] : ''}</Title>
            <Image
              width={224}
              src={selectedItem > -1 ? displayImage : ''}
            />
            <Space size='small'>
              {selectedItem > -1 ? products[selectedItem]['options'][selectedOption]['optionImageUrls'].slice(0, 4).map(img => {
                return (<Image
                  style={{ cursor: 'pointer', marginTop: '8px', border: 'solid 1px grey' }}
                  onClick={() => setDisplayImage(img)}
                  width={50}
                  preview={false}
                  src={img}
                />)
              }) : <></>}
            </Space>
          </Space>
        </Col>
        {/* <Col span={2} align="right">
          <CloseCircleOutlined
            style={{ fontSize: '25px', color: 'grey' }}
            shape="round"
            onClick={() => props.removeItem(props.id, selectedItem > -1 ? quantity * products[selectedItem]['options'][selectedOption]['price'] : 0)}
          />
        </Col> */}
      </Row>
    </Card>
  );
};

export default ProductInfo;