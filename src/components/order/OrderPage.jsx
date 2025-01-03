import React from 'react';
import OrderHeader from './OrderHeader';
import OrderDetails from './OrderDetails';
import OrderFooter from './OrderFooter';
import '../../App.css';

const OrderPage = () => {
  return (
    <div className="order-page-container">
      <OrderHeader className="order-header" />
      <OrderDetails className="order-details" />
      <OrderFooter className="order-footer" />
    </div>
  );
};

export default OrderPage;