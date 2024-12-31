import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import OrderSize from './OrderSize';
import OrderCrust from './OrderCrust';
import OrderToppings from './OrderToppings';
import OrderSummary from './OrderSummary';
import useOrderDetails from '../hooks/useOrderDetails';
import useOrderValidation from '../hooks/useOrderValidation';  // Hook'u import ettik
import axios from 'axios';  // Axios importu

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
    siparisNotu,
    setSiparisNotu,
    handleSiparisMiktariDegistir
  } = useOrderDetails();

  // Butonun aktiflik durumunu kontrol eden hook
  const { isOrderButtonDisabled } = useOrderValidation(seciliBoyut, seciliHamur, seciliMalzemeler);

  // Siparişi göndermek için fonksiyon
  const handleOrderSubmit = async () => {
    // Sipariş verisi
    const orderData = {
      boyut: seciliBoyut,
      hamur: seciliHamur,
      malzemeler: seciliMalzemeler.join(", "),  // Malzemeleri virgülle ayırarak gönderiyoruz
      siparisMiktari,
      siparisNotu
    };

    // API isteği
    try {
      const response = await axios.post('https://reqres.in/api/pizza', orderData);
      console.log("Sipariş Özeti:", response.data);  // API'den gelen yanıtı konsola yazdırıyoruz
    } catch (error) {
      console.error("Sipariş gönderilemedi:", error);  // Hata durumunda mesaj yazdırıyoruz
    }
  };

  return (
    <div className="order-details">
      {/* Pizza adı ve fiyatı */}
      <div className="pizza-info">
        <div className="pizza-name">Position Absolute Acı pizza</div>
        <div className="pizza-price">{fiyat} TL</div>
        <div className="pizza-description">
          Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre.
        </div>
      </div>

      {/* Boyut, Hamur ve Malzemeler */}
      <OrderSize seciliBoyut={seciliBoyut} setSeciliBoyut={setSeciliBoyut} />
      <OrderCrust seciliHamur={seciliHamur} setSeciliHamur={setSeciliHamur} />
      <OrderToppings seciliMalzemeler={seciliMalzemeler} setSeciliMalzemeler={setSeciliMalzemeler} />

      {/* Sipariş Notu */}
      <FormGroup className="order-note">
        <label htmlFor="order-note">Sipariş Notu</label>
        <textarea
          id="order-note"
          name="order-note"
          rows="2"
          placeholder="Siparişinizle ilgili not bırakın..."
          value={siparisNotu}
          onChange={(e) => setSiparisNotu(e.target.value)}  // Sipariş notunu güncelliyoruz
        />
      </FormGroup>

      {/* Sipariş Özeti */}
      <OrderSummary
        fiyat={fiyat}
        siparisMiktari={siparisMiktari}
        handleSiparisMiktariDegistir={handleSiparisMiktariDegistir}
      />

      {/* Sipariş Ver Butonu */}
      <Button 
        type="button"  // 'submit' yerine 'button' kullanıyoruz çünkü form submit etmiyoruz
        className="order-button"
        color="warning"
        disabled={isOrderButtonDisabled()}  // Butonun aktiflik durumunu kontrol ediyoruz
        onClick={handleOrderSubmit}  // Butona tıklandığında handleOrderSubmit fonksiyonu çağrılacak
      >
        Sipariş Ver
      </Button>

      {/* Toplam Fiyat */}
      <p>Toplam Fiyat: {fiyat * siparisMiktari} TL</p>
    </div>
  );
};

export default OrderDetails;