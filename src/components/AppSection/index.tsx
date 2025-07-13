// libraries
import type { FC } from 'react';
// assets
import AppStoreIcon from 'assets/icons/app_store.svg';
import GooglePlayIcon from 'assets/icons/google_play.svg';

const AppSection:FC = () => (
  <section className="section app-section">
    <div className="app-section-content">
      <h1 className="app-section-title">Мобильное приложение Solva</h1>
      <p className="app-section-subtitle">Простой способ подать заявку на микрокредит и погашать платежи – в вашем смартфоне</p>
      <div className="app-section-download-buttons">
        <a className="app-download-link" href="/">
          <img alt="google-play-img" className="google-play-img" src={GooglePlayIcon} />
        </a>
        <a className="app-download-link" href="/">
          <img alt="app-store-img" className="app-store-img" src={AppStoreIcon} />
        </a>
      </div>
    </div>
  </section>
);

export default AppSection;
