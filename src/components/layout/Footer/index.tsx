// libraries
import type { FC } from 'react';
// components
import Contacts from 'components/layout/Footer/Contacts';
import FooterNavigation from 'components/layout/Footer/Navigation';

const Footer: FC = () => (
  <footer className="footer">
    <Contacts />
    <FooterNavigation />
  </footer>
);

export default Footer;
