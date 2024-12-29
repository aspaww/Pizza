import React from 'react';
import HomeHeader from './HomeHeader';
import HomeContent from './HomeContent';
import HomeFooter from './HomeFooter';


export default function HomePage(){
  return (
    <div className="home-page">
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </div>
  );
};
