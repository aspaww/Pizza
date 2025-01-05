import React from "react";
import './Home.css'

// Images
import kart1 from "../../../images/iteration-2-images/cta/kart-1.png";
import kart2 from "../../../images/iteration-2-images/cta/kart-2.png";
import kart3 from "../../../images/iteration-2-images/cta/kart-3.png";
import pizzaIcon from "../../../images/iteration-2-images/icons/2.svg";
import burgerIcon from "../../../images/iteration-2-images/icons/3.svg";
import ramenIcon from "../../../images/iteration-2-images/icons/1.svg";
import fastFoodIcon from "../../../images/iteration-2-images/icons/4.svg";
import softDrinkIcon from "../../../images/iteration-2-images/icons/5.svg";
import drinkIcon from "../../../images/iteration-2-images/icons/6.svg";
import food1 from "../../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../../images/iteration-2-images/pictures/food-3.png";

const HomeContent = () => {
  return (
    <div className="home-content">
      {/* Categories Section */}
      <div className="categories">
        <div className="category">
          <img src={ramenIcon} alt="Ramen" />
          <span>Ramen</span>
        </div>
        <div className="category active">
          <img src={pizzaIcon} alt="Pizza" />
          <span>Pizza</span>
        </div>
        <div className="category">
          <img src={burgerIcon} alt="Burger" />
          <span>Burger</span>
        </div>
        <div className="category">
          <img src={fastFoodIcon} alt="Fast Food" />
          <span>Kızartmalar</span>
        </div>
        <div className="category">
          <img src={softDrinkIcon} alt="Soft Drinks" />
          <span>Fast Food</span>
        </div>
        <div className="category">
          <img src={drinkIcon} alt="Soft Drinks" />
          <span>Soft Drinks</span>
        </div>
      </div>

      {/* Call-to-Action Banners Section */}
<div className="cta-banners">
  <div
    className="banner1"
    style={{ backgroundImage: `url(${kart1})`}}
  >
    <h3>Özel <br/> Lezzetus</h3>
    <p>Position: Absolute Acı Pizza</p>
    <button>Sipariş Ver</button>
  </div>
  <div className="right-banners">
    <div
      className="banner2"
      style={{ backgroundImage: `url(${kart2})` }}
    >
      <h3>Hackathon Burger Menü</h3>
      <button>Sipariş Ver</button>
    </div>
    <div
      className="banner3"
      style={{ backgroundImage: `url(${kart3})` }}
    >
      <h3><span style={{color:'#CE2829'}}>Çooook </span>hızlı npm gibi kurye</h3>
      <button>Sipariş Ver</button>
    </div>
  </div>
</div>

  {/* Featured Products Section */}
  <div className="featured-products">
    <h1 className="satisfy"> en çok paketlenen menüler</h1>
    <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>

    {/* Categories Section */}
    <div className="featured-categories">
      <div className="featured-category-ramen">
        <img src={ramenIcon} alt="Ramen" />
        <span>Ramen</span>
      </div>
      <div className="featured-category-pizza">
        <img src={pizzaIcon} alt="Pizza" />
        <span>Pizza</span>
      </div>
      <div className="featured-category-burger">
        <img src={burgerIcon} alt="Burger" />
        <span>Burger</span>
      </div>
      <div className="featured-category-fastfood">
        <img src={fastFoodIcon} alt="Fast Food" />
        <span>Kızartmalar</span>
      </div>
      <div className="featured-category-softdrink">
        <img src={softDrinkIcon} alt="Soft Drinks" />
        <span>Fast Food</span>
      </div>
      <div className="featured-category-drink">
        <img src={drinkIcon} alt="Soft Drinks" />
        <span>Soft Drinks</span>
      </div>
    </div>

    {/* Products List Section */}
    <div className="product-list">
      <div className="product-card">
        <img src={food1} alt="Terminal Pizza" />
        <h3>Terminal Pizza</h3>
        <p>4.9 <span>(200)</span> 60₺</p>
      </div>
      <div className="product-card">
        <img src={food2} alt="Position Absolute Acı Pizza" />
        <h3>Position Absolute Acı Pizza</h3>
        <p>4.9 <span>(200)</span> 60₺</p>
      </div>
      <div className="product-card">
        <img src={food3} alt="useEffect Tavuklu Burger" />
        <h3>useEffect Tavuklu Burger</h3>
        <p>4.9 <span>(200)</span> 60₺</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default HomeContent;
