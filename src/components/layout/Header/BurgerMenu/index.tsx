// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// types
import type { Navigation } from 'components/shared/INavigation';
// components
import NavBar from 'components/shared/NavBar';
// types
import type { SocialMediaItem } from 'components/layout/Header/BurgerMenu/config';
// configs
import { burgerMenuItems, socialMediaItems } from 'components/layout/Header/BurgerMenu/config';
// assets
import WhatsAppIcon from 'assets/icons/whatsapp-icon.svg';

const BurgerMenu: FC = () => {
  const isBurger: boolean = true;

  return (
    <div className="burger-menu-content">
      <nav className="burger-primary-nav">
        <ul className="burger-primary-navbar">
          { burgerMenuItems.map((item: Navigation) => (
            <li key={item.id} className="burger-primary-nav-item">
              <Link className="burger-primary-nav-link" to="/">
                {item.description}
              </Link>
              {item.icon && <img alt="social-media-link-icon" className="open-link-img" src={item.icon} />}
            </li>
          ))}
        </ul>
      </nav>
      <NavBar isBurger={isBurger} />
      <div className="info-block">
        <div className="info-block-top">
          <div className="contact-info">
            <a className="phone" href="tel: +77010063535">+7 701 006 35 35</a>
            <span className="work-info">с 9:00 до 20:00</span>
          </div>
          <button className="language-button">RU</button>
        </div>
        <div className="info-block-bottom">
          <div className="burger-menu-additional-info">
            <a className="cardon-link" href="/">
              <img alt="social-media-link-icon" className="social-media-link-icon" src={WhatsAppIcon} />
              Написать в Whats App
            </a>
          </div>
          <div className="burger-menu-social-media">
            { socialMediaItems.map((item: SocialMediaItem) => (
              <a key={item.id} className={item.linkClass} href="/">
                <img alt="social-media-link-icon" className={item.iconClass} src={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
