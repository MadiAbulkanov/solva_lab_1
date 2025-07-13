// types
import type { Navigation } from 'components/shared/INavigation';
// assets
import AppStoreIcon from 'assets/icons/app_store.svg';
import FbIcon from 'assets/icons/facebook_icon.svg';
import GooglePlayIcon from 'assets/icons/google_play.svg';
import InstIcon from 'assets/icons/instagram_icon.svg';
import LinkedinIcon from 'assets/icons/linkedin_icon.svg';
import NextBtn from 'assets/icons/next_slide.svg';
import TgIcon from 'assets/icons/tg_icon.svg';

export interface SocialMediaItem {
  id: number;
  linkClass: string;
  iconClass: string;
  icon: string;
}

export const burgerMenuItems: Navigation[] = [
  { id: 1, description: 'Частным лицам', icon: NextBtn },
  { id: 2, description: 'Бизнесу', icon: NextBtn },
  { id: 3, description: 'Инвесторам' },
  { id: 4, description: 'Блог. Для дела', icon: NextBtn },
];

export const socialMediaItems: SocialMediaItem[] = [
  {
    id: 1, linkClass: 'app-download-white-link', iconClass: 'app-store-white-img', icon: AppStoreIcon,
  },
  {
    id: 2, linkClass: 'app-download-white-link', iconClass: 'google-play-white-img', icon: GooglePlayIcon,
  },
  {
    id: 3, linkClass: 'social-media-link', iconClass: 'social-media-link-icon', icon: InstIcon,
  },
  {
    id: 4, linkClass: 'social-media-link', iconClass: 'social-media-link-icon', icon: FbIcon,
  },
  {
    id: 5, linkClass: 'social-media-link', iconClass: 'social-media-link-icon', icon: LinkedinIcon,
  },
  {
    id: 6, linkClass: 'social-media-link', iconClass: 'social-media-link-icon', icon: TgIcon,
  },
];
