import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import useOrderDetails from '../hooks/useOrderDetails';

const SuccessPage = () => {
  const location = useLocation();
  const orderData = location.state;


  return (
    <div className="success-page">
      <div className="succes-page-order">
        <h1>Teknolojik Yemekler</h1>
        <h2>Sipariş Alındı!</h2>
        <hr/>
        <p>Position Absolute Acı Pizza</p>
        <p>Boyut:{orderData.boyut}</p>
        <p>Hamur: {orderData.hamur}</p>
        <p>Malzemeler: {orderData.malzemeler}</p>
        <div className='succes-page-price'>
          <p>Sipariş Toplamı</p>
          <p>Seçimler &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {orderData.fiyat}</p>
          <p>Toplam &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {(orderData.fiyat)*(orderData.siparisMiktari)}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
