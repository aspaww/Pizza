import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const OrderToppings = ({ seciliMalzemeler, setSeciliMalzemeler }) => {
  const malzemeListesi = [
    'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır','3 Çeşit peynir','Jalepone','Kırmızı biber',
    'Sucuk', 'Kanada Jambonu', 'Ananas', 'Tavuk Parça', 'Jalapeno', 'Domuz Pastırması', 'Yeşil Zeytin'
  ];

  const handleMalzemeDegistir = (event) => {
    const { value, checked } = event.target;
    setSeciliMalzemeler((prevMalzemeler) =>
      checked ? [...prevMalzemeler, value] : prevMalzemeler.filter((malzeme) => malzeme !== value)
    );
  };

  return (
    <FormGroup className="order-toppings">
      <legend className="order-toppings-legend">Ek Malzemeler</legend>
      <p>En Fazla 10 Malzeme Seçebilirsiniz.</p>
      <div className="toppings-options">
        {malzemeListesi.map((malzeme, index) => (
          <FormGroup check key={index} className="topping-option">
            <Label check className="topping-label">
              <Input
                className="topping-checkbox"
                type="checkbox"
                value={malzeme}
                checked={seciliMalzemeler.includes(malzeme)}
                onChange={handleMalzemeDegistir}
                disabled={seciliMalzemeler.length >= 10 && !seciliMalzemeler.includes(malzeme)}
              />
              {malzeme}
            </Label>
          </FormGroup>
        ))}
      </div>
    </FormGroup>
  );
};

export default OrderToppings;