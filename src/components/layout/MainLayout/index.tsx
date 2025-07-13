// libraries
import type { FC } from 'react';
// components
import AppSection from 'components/AppSection';
import AwardsSection from 'components/AwardsSection';
import Calculator from 'components/Calculator';
import Footer from 'components/layout/Footer';
import PaymentSection from 'components/PaymentSection';
import ProductCards from 'components/ProductCards';
import Promo from 'components/Promo';

const MainLayout: FC = () => (
  <>
    <Promo />
    <ProductCards />
    <Calculator />
    <AppSection />
    <AwardsSection />
    <PaymentSection />
    <Footer />
  </>
);

export default MainLayout;
