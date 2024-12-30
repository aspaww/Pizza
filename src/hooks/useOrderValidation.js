// src/hooks/useOrderValidation.js
const useOrderValidation = (seciliBoyut, seciliHamur, seciliMalzemeler) => {
    // Butonun aktif olma durumunu kontrol eden fonksiyon
    const isOrderButtonDisabled = () => {
      // 1. En az 4, en fazla 10 malzeme seçilmesi
      const isMalzemeValid = seciliMalzemeler.length >= 4 && seciliMalzemeler.length <= 10;
      // 2. Hamur kalınlığı seçilmesi
      const isHamurSelected = seciliHamur !== '';
      // 3. Pizza boyutunun seçilmesi
      const isBoyutSelected = seciliBoyut !== '';
  
      // Eğer hepsi geçerliyse buton aktif, değilse devre dışı
      return !(isMalzemeValid && isHamurSelected && isBoyutSelected);
    };
  
    return { isOrderButtonDisabled };
  };
  
  export default useOrderValidation;