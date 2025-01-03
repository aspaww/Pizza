import React from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';

const OrderSize = ({ seciliBoyut, setSeciliBoyut }) => {
  return (
    <FormGroup tag="fieldset" className="order-size-fieldset">
      <legend className="order-size-legend">Boyut Seç *</legend>
      <Row className="order-size-options">
        {['Küçük', 'Orta', 'Büyük'].map((boyutSecenek, index) => (
          <Col key={index} className="order-size-option">
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="boyut"
                  value={boyutSecenek}
                  checked={seciliBoyut === boyutSecenek}
                  onChange={(e) => setSeciliBoyut(e.target.value)}
                />
                {boyutSecenek}
              </Label>
            </FormGroup>
          </Col>
        ))}
      </Row>
    </FormGroup>
  );
};

export default OrderSize;