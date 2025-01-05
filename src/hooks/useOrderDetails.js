import { useState } from 'react';

const useOrderDetails = () => {
  const [seciliBoyut, setSeciliBoyut] = useState(''); 
  const [seciliHamur, setSeciliHamur] = useState('İnce'); 
  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);
  const [siparisMiktari, setSiparisMiktari] = useState(1);
  const [siparisNotu, setSiparisNotu] = useState(''); 
  const [isim,setIsim] =useState([]);


  const fiyatlar = {
    boyutlar: {
      S: 25,
      M: 35,
      L: 45
    },
    hamurlar: {
      İnce: 5,
      Orta: 7,
      Kalın: 9
    },
    ekMalzeme: 5 
  };


  const fiyat = 40 (fiyatlar.boyutlar[seciliBoyut] || 0) 
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