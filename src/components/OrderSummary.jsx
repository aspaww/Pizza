import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const OrderSummary = ({ fiyat, siparisMiktari, handleSiparisMiktariDegistir }) => {
  return (
    <Row className="order-summary-row">
      <Col className="order-summary-col">
        <div className="order-summary-quantity">
          <Button className="quantity-button" onClick={() => handleSiparisMiktariDegistir(-1)}>-</Button>
          <span className="quantity">{siparisMiktari}</span>
          <Button className="quantity-button" onClick={() => handleSiparisMiktariDegistir(1)}>+</Button>
        </div>
      </Col>
      <Col className="order-summary-col">
        <Card className="order-summary-card">
          <CardBody className="order-summary-card-body">
            <CardTitle className="order-summary-card-title">Sipariş Özeti</CardTitle>
            <CardText className="order-summary-card-text">Ek Malzeme Ücret: {fiyat}₺</CardText>
            <CardText className="order-summary-card-text">Toplam: {fiyat * siparisMiktari}₺</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default OrderSummary;