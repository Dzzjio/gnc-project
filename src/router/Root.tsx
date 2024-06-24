import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import HeaderTop from '../Layout/Header/HeaderTop';

const Root = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowHeader(scrollPosition > currentScrollPos || currentScrollPos < 10);
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="app">
      <div className={`header-container ${showHeader ? 'show' : 'hide'}`}>
        <HeaderTop />
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;