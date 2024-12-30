// src/components/Order/OrderSummary.jsx
import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const OrderSummary = ({ fiyat, siparisMiktari, handleSiparisMiktariDegistir }) => {
  return (
    <Row>
      <Col>
        <div className="order-summary">
          <Button onClick={() => handleSiparisMiktariDegistir(-1)}>-</Button>
          <span>{siparisMiktari}</span>
          <Button onClick={() => handleSiparisMiktariDegistir(1)}>+</Button>
        </div>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <CardTitle>Sipariş Özeti</CardTitle>
            <CardText>Ek Malzeme Ücret: {fiyat}₺</CardText>
            <CardText>Toplam: {fiyat * siparisMiktari}₺</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default OrderSummary;