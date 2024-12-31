import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomaPage'; // 'HomePage' bileşeninin doğru import edilmesi
import OrderPage from './components/OrderPage';
import SuccessPage from './components/SuccessPage';  // SuccessPage'i import ediyoruz
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Ana sayfa */}
        <Route path="/order" element={<OrderPage />} />  {/* Sipariş sayfası */}
        <Route path="/success" element={<SuccessPage />} />  {/* SuccessPage sayfası */}
      </Routes>
    </Router>
  );
}