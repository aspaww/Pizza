import React from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';

const OrderSize = ({ seciliBoyut, setSeciliBoyut }) => {
  return (
    <FormGroup tag="fieldset">
      <legend>Boyut Seç *</legend>
      <Row>
        {['Küçük', 'Orta', 'Büyük'].map((boyutSecenek, index) => (
          <Col key={index}>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="boyut"
                  value={boyutSecenek}
                  checked={seciliBoyut === boyutSecenek}
                  onChange={(e) => setSeciliBoyut(e.target.value)}
                />{' '}
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