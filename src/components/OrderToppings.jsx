// src/components/Order/OrderToppings.jsx
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const OrderToppings = ({ seciliMalzemeler, setSeciliMalzemeler }) => {
  const malzemeListesi = [
    'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır',
    'Sucuk', 'Kanada Jambonu', 'Ananas', 'Tavuk Parça', 'Jalapeno','Domuz Pastırması','Yeşil Zeytin'
  ];

  const handleMalzemeDegistir = (event) => {
    const { value, checked } = event.target;
    setSeciliMalzemeler((prevMalzemeler) =>
      checked ? [...prevMalzemeler, value] : prevMalzemeler.filter((malzeme) => malzeme !== value)
    );
  };

  // Malzeme limitini kontrol et
  const maxMalzemeLimit = 10;
  const isMaxMalzemeSelected = seciliMalzemeler.length >= maxMalzemeLimit;

  // En az 4 malzeme seçilmesi gerekiyor
  const isMinMalzemeSelected = seciliMalzemeler.length >= 4;

  return (
    <FormGroup>
      <legend>Ek Malzemeler</legend>
      <div>
        {malzemeListesi.map((malzeme, index) => (
          <FormGroup check key={index}>
            <Label check>
              <Input
                type="checkbox"
                value={malzeme}
                checked={seciliMalzemeler.includes(malzeme)}
                onChange={handleMalzemeDegistir}
                disabled={isMaxMalzemeSelected && !seciliMalzemeler.includes(malzeme)} // Seçim limiti aşıldığında diğerlerini disabled yap
              />{' '}
              {malzeme}
            </Label>
          </FormGroup>
        ))}
      </div>
      {!isMinMalzemeSelected && <p style={{ color: 'red' }}>En az 4 malzeme seçmeniz gerekiyor!</p>}
    </FormGroup>
  );
};

export default OrderToppings;