import { useState } from 'react';

const useOrderDetails = () => {
  // Boyut, Hamur, ve Malzeme seçeneklerinin state'leri
  const [seciliBoyut, setSeciliBoyut] = useState('Orta');  // Varsayılan boyut Orta
  const [seciliHamur, setSeciliHamur] = useState('İnce');  // Varsayılan hamur İnce
  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);
  const [siparisMiktari, setSiparisMiktari] = useState(1);

  // Fiyat hesaplamak için boyutlar ve hamurların fiyatları
  const fiyatlar = {
    boyutlar: {
      Küçük: 25,
      Orta: 35,
      Büyük: 45
    },
    hamurlar: {
      İnce: 5,
      Orta: 7,
      Kalın: 9
    }
  };

  // Fiyat hesaplama - Boyut ve Hamur seçilmediğinde 0 döndürmesini sağlıyoruz
  const fiyat = (fiyatlar.boyutlar[seciliBoyut] || 0) + (fiyatlar.hamurlar[seciliHamur] || 0);

// Sipariş miktarını değiştirme fonksiyonu
const handleSiparisMiktariDegistir = (deger) => {
    if (siparisMiktari + deger >= 1) { // Miktar 1'den az olmasın
      setSiparisMiktari(siparisMiktari + deger);
    }
  };

  return {
    seciliBoyut,
    setSeciliBoyut,
    seciliHamur,
    setSeciliHamur,
    seciliMalzemeler,
    setSeciliMalzemeler,
    fiyat,
    siparisMiktari,
    setSiparisMiktari,
    handleSiparisMiktariDegistir // Bu fonksiyonu da döndürüyoruz
  };
};

export default useOrderDetails;