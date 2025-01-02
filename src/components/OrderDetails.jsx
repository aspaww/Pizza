import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import OrderSize from './OrderSize';
import OrderCrust from './OrderCrust';
import OrderToppings from './OrderToppings';
import OrderSummary from './OrderSummary';
import useOrderDetails from '../hooks/useOrderDetails';
import useOrderValidation from '../hooks/useOrderValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // navigate importu

const OrderDetails = () => {
  const navigate = useNavigate();
  const {
    seciliBoyut,
    setSeciliBoyut,
    seciliHamur,
    setSeciliHamur,
    seciliMalzemeler,
    setSeciliMalzemeler,
    fiyat,
    siparisMiktari,
    siparisNotu,
    setSiparisNotu,
    handleSiparisMiktariDegistir
  } = useOrderDetails();

  const { isOrderButtonDisabled } = useOrderValidation(seciliBoyut, seciliHamur, seciliMalzemeler);

  const handleOrderSubmit = async () => {
    const orderData = {
      boyut: seciliBoyut,
      hamur: seciliHamur,
      malzemeler: seciliMalzemeler.join(", "),
      siparisMiktari,
      siparisNotu,
      fiyat,
    };
  
    try {
      const response = await axios.post('https://reqres.in/api/pizza', orderData);
      console.log("Sipariş Özeti:", response.data);
  

      navigate('/success', { state: response.data });
    } catch (error) {
      console.error("Sipariş gönderilemedi:", error);
    }
  };

  return (
    <div className="order-details">
      <div className="pizza-info">
        <div className="pizza-name">Position Absolute Acı pizza</div>
        <div className="pizza-price">{fiyat} TL</div>
        <div className="pizza-description">
          Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre.
        </div>
      </div>

      <OrderSize seciliBoyut={seciliBoyut} setSeciliBoyut={setSeciliBoyut} />
      <OrderCrust seciliHamur={seciliHamur} setSeciliHamur={setSeciliHamur} />
      <OrderToppings seciliMalzemeler={seciliMalzemeler} setSeciliMalzemeler={setSeciliMalzemeler} />

      <FormGroup className="order-note">
        <label htmlFor="order-note">Sipariş Notu</label>
        <textarea
          id="order-note"
          name="order-note"
          rows="2"
          placeholder="Siparişinizle ilgili not bırakın..."
          value={siparisNotu}
          onChange={(e) => setSiparisNotu(e.target.value)}
        />
      </FormGroup>
      <hr />

      <OrderSummary
        fiyat={fiyat}
        siparisMiktari={siparisMiktari}
        handleSiparisMiktariDegistir={handleSiparisMiktariDegistir}
      />

      <Button
        type="button"
        className="order-button"
        color="warning"
        disabled={isOrderButtonDisabled()}
        onClick={handleOrderSubmit}
      >
        Sipariş Ver
      </Button>

    </div>
  );
};

export default OrderDetails;