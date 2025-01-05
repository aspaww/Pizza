import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; 
import homeBanner from '../../assets/home-banner.png'; 
import './Home.css'

export default function HomeHeader() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <header className="header" style={{ backgroundImage: `url(${homeBanner})` }}>
      <div className="header-content">
        <h1>Teknolojik Yemekler</h1>
        <h2 className='satisfy-header'>fırsatı kaçırma</h2>
        <p>KOD ACIKTIRIR<br/> PİZZA, DOYURUR</p>
        <Button onClick={handleClick}>ACIKTIM</Button>
      </div>
    </header>
  );
}