import { useState } from 'react';

const useOrderDetails = () => {
  // Boyut, Hamur, ve Malzeme seçeneklerinin state'leri
  const [seciliBoyut, setSeciliBoyut] = useState('Orta');  // Varsayılan boyut Orta
  const [seciliHamur, setSeciliHamur] = useState('İnce');  // Varsayılan hamur İnce
  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);
  const [siparisMiktari, setSiparisMiktari] = useState(1);
  const [siparisNotu, setSiparisNotu] = useState(''); // Sipariş notu state'i

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
    },
    ekMalzeme: 5 // Her ek malzeme için 5 TL
  };

  // Fiyat hesaplama - Boyut, Hamur ve Ek Malzeme ücretini dahil ediyoruz
  const fiyat = (fiyatlar.boyutlar[seciliBoyut] || 0) 
               + (fiyatlar.hamurlar[seciliHamur] || 0)
               + (seciliMalzemeler.length * fiyatlar.ekMalzeme); // Ek malzemeler için ücret ekleniyor

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
    siparisNotu,  
    setSiparisNotu,
    handleSiparisMiktariDegistir
  };
};

export default useOrderDetails;