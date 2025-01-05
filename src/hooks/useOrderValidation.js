const useOrderValidation = (seciliBoyut, seciliHamur, seciliMalzemeler) => {
    const isOrderButtonDisabled = () => {
      const isMalzemeValid = seciliMalzemeler.length >= 4 && seciliMalzemeler.length <= 10;
      const isHamurSelected = seciliHamur !== '';
      const isBoyutSelected = seciliBoyut !== '';
  
      return !(isMalzemeValid && isHamurSelected && isBoyutSelected);
    };
  
    return { isOrderButtonDisabled };
  };
  
  export default useOrderValidation;