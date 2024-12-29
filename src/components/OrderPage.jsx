import React from 'react';
import OrderHeader from './OrderHeader';
import OrderDetails from './OrderDetails';
import OrderFooter from './OrderFooter';

const OrderPage = () => {
  return (
    <div className="order-page">
      <OrderHeader />
      <OrderDetails />
      <OrderFooter />
    </div>
  );
};

export default OrderPage;