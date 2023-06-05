import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { LayoutContainer, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <Footer />
    </LayoutContainer>
  );
};

export default SharedLayout;