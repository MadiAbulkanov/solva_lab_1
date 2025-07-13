// libraries
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Popover } from '@blueprintjs/core';
// components
import BurgerMenu from 'components/layout/Header/BurgerMenu';
import DropdownMenu from 'components/layout/Header/DropdownMenu';
import Button from 'components/shared/Button';
// assets
import logo from 'assets/images/logo.png';

interface NavBarItem {
  description: string;
  type: 'private' | 'business' | 'investors';
}

const navBarItems: NavBarItem[] = [
  { description: 'Частным лицам', type: 'private' },
  { description: 'Бизнесу', type: 'business' },
  { description: 'Инвесторам', type: 'investors' },
];

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeDropdownMenu, setActiveDropdownMenu] = useState<'private' | 'business' | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (type: 'private' | 'business' | 'investors') => {
    if (type === 'investors') {
      setActiveDropdownMenu(null);

      return;
    }
    setActiveDropdownMenu(activeDropdownMenu === type ? null : type);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container header-container">
        <button className={`burger-menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="burger-icon"> </span>
          <span className="burger-icon"> </span>
          <span className="burger-icon"> </span>
        </button>
        <Link className="header-logo-link" to="/">
          <img alt="logo" className="header-logo" src={logo} />
        </Link>
        <div className="header-content">
          <nav className="header-navigation">
            <ul className="navbar-nav">
              { navBarItems.map((item: NavBarItem) => (
                <li key={item.description} className="header-nav-item" onClick={() => handleNavClick(item.type)}>
                  {item.description}
                </li>
              ))}
            </ul>
            <Popover
              content={activeDropdownMenu && <DropdownMenu type={activeDropdownMenu} />}
              isOpen={!!activeDropdownMenu}
              placement="bottom-start"
            >
              <div />
            </Popover>
          </nav>
          <div className="header-actions">
            <Link className="map-link" to="/">Карта отделений</Link>
            <button className="language-button">KZ</button>
            <Button className="login-button" title="Войти" />
          </div>
        </div>
      </div>
      <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
