import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import HeaderTop from '../Layout/Header/HeaderTop';

const Root = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowHeader(scrollPosition > currentScrollPos || currentScrollPos < 10);
    setShowScrollButton(currentScrollPos > 300);
    setScrollPosition(currentScrollPos);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="30" d="M112 328l144-144 144 144"/></svg>
        </button>
      )}
    </div>
  );
};

export default Root;
