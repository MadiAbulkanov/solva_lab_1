// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// components
import PrimaryNav from 'components/layout/Footer/Navigation/PrimaryNav';
// configs
import { navLinksForBusiness, navLinksPrivateIndividuals, secondNavLinks } from 'components/layout/Footer/Navigation/config';
// assets
import AppStoreIcon from 'assets/icons/app_store.svg';
import GooglePlayIcon from 'assets/icons/google_play.svg';
import cardonNeutralLogo from 'assets/images/cardon-neutral-logo.png';
import dssLogo from 'assets/images/dss-logo.png';

const FooterNavigation: FC = () => (
  <div className="footer-nav">
    <div className="footer-primary-nav">
      <PrimaryNav config={navLinksPrivateIndividuals} title="Частным лицам" />
      <PrimaryNav config={navLinksForBusiness} title="Для бизнеса" />
      <div className="footer-app-links">
        <a className="app-download-white-link" href="/">
          <img alt="google-play-white-img" className="google-play-white-img" src={GooglePlayIcon} />
        </a>
        <a className="app-download-white-link" href="/">
          <img alt="app-store-white-img" className="app-store-white-img" src={AppStoreIcon} />
        </a>
        <a className="cardon-link" href="/"><img alt="cardon-img" className="cardon-img" src={cardonNeutralLogo} /></a>
        <a className="dss-link" href="/"><img alt="dss-img" className="dss-img" src={dssLogo} /></a>
      </div>
    </div>
    <div className="footer-secondary-nav">
      <nav className="footer-secondary-nav-menu">
        <ul className="footer-secondary-nav-links">
          { secondNavLinks.map((link: { id:number, description: string }) => (
            <li key={link.id} className="footer-secondary-nav-item">
              <Link className="footer-secondary-nav-link" to="/">
                {link.description}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer-partner-logos">
        <a className="cardon-link" href="/"><img alt="cardon-img" className="cardon-img" src={cardonNeutralLogo} /></a>
        <a className="dss-link" href="/"><img alt="dss-img" className="dss-img" src={dssLogo} /></a>
      </div>
    </div>
    <p className="copyright">
      АО «МФО ОнлайнКазФинанс», Лицензия на осуществление микрофинансовой деятельности
      № 02.21.0004.М. от 06.03.2023 года, выдана Управлением региональных представителей
      в городе Алматы Агентства Республики Казахстан по регулированию и развитию финансового рынка.
    </p>
  </div>
);

export default FooterNavigation;
