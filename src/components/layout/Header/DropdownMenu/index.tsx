// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// components
import NavBar from 'components/shared/NavBar';
// types
import type { CategoryItem } from 'components/layout/Header/DropdownMenu/config';
// configs
import {
  business,
  privateIndividuals,
} from 'components/layout/Header/DropdownMenu/config';
// assets
import HandsetIcon from 'assets/icons/handset_icon.svg';
import WhatsAppIcon from 'assets/icons/whatsapp-icon.svg';

interface DropdownMenuProps {
  type: 'private' | 'business';
}

const DropdownMenu:FC<DropdownMenuProps> = ({ type }) => {
  const isDropdownMenu: boolean = true;
  const configMenu: Record<'private' | 'business', typeof privateIndividuals> = {
    private: privateIndividuals,
    business,
  };

  const config: CategoryItem[][] = configMenu[type];

  return (
    <div className="dropdown-menu">
      <div className="dropdown-menu-content">
        <nav className="dropdown-menu-nav">
          <ul className="dropdown-menu-nav-items">
            {config[0].map((category: CategoryItem) => (
              <li key={category.id} className={`dropdown-menu-nav-item ${type === 'private' && 'private-nav-item'}`}>
                {category.icon && (
                  <img alt="dropdown-menu-nav-link-icon" className="dropdown-menu-nav-link-icon" src={category.icon} />
                )}
                <Link className="dropdown-menu-nav-link" to="/">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="dropdown-menu-nav">
          <ul className="dropdown-menu-nav-items">
            {config[1].map((category: CategoryItem) => (
              <li key={category.id} className="dropdown-menu-nav-item">
                <Link className={`${type === 'private' ? 'private-nav-link' : 'dropdown-menu-nav-link'}`} to="/">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <NavBar isDropdownMenu={isDropdownMenu} />
      </div>
      <div className="dropdown-menu-contacts">
        <a className="dropdown-menu-contact-link" href="/">
          <img alt="social-media-link-icon" className="social-media-link-icon" src={WhatsAppIcon} />
          <span className="dropdown-menu-contact-link-text">Написать в Whats App</span>
        </a>
        <a className="dropdown-menu-contact-link" href="tel: +77010063535">
          <img alt="social-media-link-icon" className="social-media-link-icon" src={HandsetIcon} />
          <span className="dropdown-menu-contact-link-phone">+7 701 006 35 35</span>
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
