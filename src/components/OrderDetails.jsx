import React from 'react';
import { Button } from 'reactstrap';
import OrderSize from './OrderSize';
import OrderCrust from './OrderCrust';
import OrderToppings from './OrderToppings';
import OrderSummary from './OrderSummary';
import useOrderDetails from '../hooks/useOrderDetails';
import useOrderValidation from '../hooks/useOrderValidation';  // Hook'u import ettik

const OrderDetails = () => {
  const {
    seciliBoyut,
    setSeciliBoyut,
    seciliHamur,
    setSeciliHamur,
    seciliMalzemeler,
    setSeciliMalzemeler,
    fiyat,
    siparisMiktari,
    handleSiparisMiktariDegistir
  } = useOrderDetails();

  // Butonun aktiflik durumunu kontrol eden hook
  const { isOrderButtonDisabled } = useOrderValidation(seciliBoyut, seciliHamur, seciliMalzemeler);

  return (
    <div className="order-details">
      {/* Pizza adı ve fiyatı */}
      <div className="pizza-info">
        <div className="pizza-name">Position Absolute Acı pizza</div>
        <div className="pizza-price">{fiyat} TL</div>
      </div>

      {/* Boyut, Hamur ve Malzemeler */}
      <OrderSize seciliBoyut={seciliBoyut} setSeciliBoyut={setSeciliBoyut} />
      <OrderCrust seciliHamur={seciliHamur} setSeciliHamur={setSeciliHamur} />
      <OrderToppings seciliMalzemeler={seciliMalzemeler} setSeciliMalzemeler={setSeciliMalzemeler} />

      {/* Sipariş Özeti */}
      <OrderSummary
        fiyat={fiyat}
        siparisMiktari={siparisMiktari}
        handleSiparisMiktariDegistir={handleSiparisMiktariDegistir}
      />

      {/* Sipariş Ver Butonu */}
      <Button 
  type="submit" 
  color="warning" 
  disabled={isOrderButtonDisabled()}  /* Butonun aktiflik durumunu kontrol et */
>
  Sipariş Ver
</Button>

      {/* Toplam Fiyat */}
      <p>Toplam Fiyat: {fiyat * siparisMiktari} TL</p>
    </div>
  );
};

export default OrderDetails;