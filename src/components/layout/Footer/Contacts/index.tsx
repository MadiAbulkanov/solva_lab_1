// libraries
import type { FC } from 'react';
// configs
import { socialMediaLinks } from 'components/layout/Footer/Contacts/config';

const Contacts: FC = () => (
  <div className="contacts-section">
    <div className="social-media">
      { socialMediaLinks.map((item: { id: number, icon: string }) => (
        <a key={item.id} className="social-media-link" href="/">
          <img alt="social-media-link-icon" className="social-media-link-icon" src={item.icon} />
        </a>
      ))}
    </div>
    <div className="info">
      <a className="phone" href="tel: +77010063535">+7 701 006 35 35</a>
      <span className="work-info">с 9:00 до 20:00</span>
    </div>
  </div>
);

export default Contacts;
