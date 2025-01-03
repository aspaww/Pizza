import { useState } from 'react';

const useOrderDetails = () => {
  // Boyut, Hamur, ve Malzeme seçeneklerinin state'leri
  const [seciliBoyut, setSeciliBoyut] = useState('Orta'); 
  const [seciliHamur, setSeciliHamur] = useState('İnce'); 
  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);
  const [siparisMiktari, setSiparisMiktari] = useState(1);
  const [siparisNotu, setSiparisNotu] = useState(''); 
  const [isim,setIsim] =useState([]);


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
    ekMalzeme: 5 
  };


  const fiyat = (fiyatlar.boyutlar[seciliBoyut] || 0) 
               + (fiyatlar.hamurlar[seciliHamur] || 0)
               + (seciliMalzemeler.length * fiyatlar.ekMalzeme); 


  const handleSiparisMiktariDegistir = (deger) => {
    if (siparisMiktari + deger >= 1) { 
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
    handleSiparisMiktariDegistir,
    isim,
    setIsim
  };
};

export default useOrderDetails;