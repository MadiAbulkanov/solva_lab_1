// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// types
import type { NavItem } from 'components/shared/NavBar/config';
// configs
import { promoNavItems } from 'components/shared/NavBar/config';

interface NavBarProps {
  isBurger?: boolean;
  isDropdownMenu?: boolean;
}

const blogForBusinessId = 4;
const portalId = 8;

const NavBar:FC<NavBarProps> = ({ isBurger, isDropdownMenu }) => {
  const navClassName = `section navigation
  ${isBurger ? 'burger-secondary-nav' : ''}
  ${isDropdownMenu ? 'dropdown-menu-nav-bar' : ''}`;

  const itemsToRender = promoNavItems.filter((item: NavItem) => {
    if ((item.id === blogForBusinessId && isDropdownMenu) || (item.id === portalId && !isDropdownMenu)) {
      return false;
    }

    return isBurger ? !item.hideInBurger : !item.shouldShowInBurger;
  });

  return (
    <nav className={navClassName}>
      <ul className="nav-items">
        { itemsToRender
          .map((item: NavItem) => (
            <li key={item.id} className="nav-item">
              <img alt="nav-link-icon" className="nav-link-icon" src={item.icon} />
              <Link className="nav-link" to={item.pathName}>
                {item.description}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavBar;
