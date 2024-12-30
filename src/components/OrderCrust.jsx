import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const OrderCrust = ({ seciliHamur, setSeciliHamur }) => {
  return (
    <FormGroup>
      <Label for="hamur">Hamur Kalınlığı Seç *</Label>
      <Input
        type="select"
        name="hamur"
        id="hamur"
        value={seciliHamur}
        onChange={(e) => setSeciliHamur(e.target.value)}
      >
        <option value="İnce">İnce</option>
        <option value="Orta">Orta</option>
        <option value="Kalın">Kalın</option>
      </Input>
    </FormGroup>
  );
};

export default OrderCrust;