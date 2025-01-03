import React from 'react';
import HomeHeader from '../home/HomeHeader';
import HomeContent from '../home/HomeContent';
import HomeFooter from '../home/HomeFooter';


export default function HomePage(){
  return (
    <div className="home-page">
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </div>
  );
};
