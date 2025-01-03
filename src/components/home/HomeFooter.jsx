import React from "react";
import "./Home.css";

export default function HomeFooter() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo ve İletişim */}
                <div className="footer-contact">
                    <img 
                        src="/images/iteration-2-images/footer/logo-footer.svg" 
                        alt="Teknolojik Yemekler Logo" 
                        className="footer-logo"
                    />
                    <p>
                        <img 
                            src="/images/iteration-2-images/footer/icons/icon-1.png" 
                            alt="Adres Icon" 
                            className="footer-icon"
                        />
                        &nbsp;&nbsp;341 Londonderry Road,<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;İstanbul Türkiye
                    </p>
                    <p>
                        <img 
                            src="/images/iteration-2-images/footer/icons/icon-2.png" 
                            alt="E-posta Icon" 
                            className="footer-icon"
                        />
                        <a href="mailto:acikitim@teknolojikyemekler.com">&nbsp; &nbsp;acikitim@teknolojikyemekler.com</a>
                    </p>
                    <p>
                        <img 
                            src="/images/iteration-2-images/footer/icons/icon-3.png" 
                            alt="Telefon Icon" 
                            className="footer-icon"
                        />
                        <a href="tel:+902161234567">&nbsp; &nbsp;  +90 216 123 45 67</a>
                    </p>
                </div>

                {/* Hot Menu */}
                <div className="footer-menu">
                    <h4>Hot Menu</h4>
                    <ul>
                        <li>Terminal Pizza</li>
                        <li>5 Kişilik Hackathon Pizza</li>
                        <li>useEffect Tavuklu Pizza</li>
                        <li>Beyaz Console Frosty</li>
                        <li>Testler Geçti Mutlu Burger</li>
                        <li>Position Absolute Acı Burger</li>
                    </ul>
                </div>

                {/* Instagram Görselleri */}
                <div className="footer-instagram">
                    <h4>Instagram</h4>
                    <div className="instagram-gallery">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <img 
                                key={index} 
                                src={`/images/iteration-2-images/footer/insta/li-${index}.png`} 
                                alt={`Instagram Görsel ${index + 1}`} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Alt Çizgi */}
            <div className="footer-bottom">
                <p>© 2023 Teknolojik Yemekler.</p>

            </div>
        </footer>
    );
}
