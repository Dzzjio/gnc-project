import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledHeaderContainer, StyledLangOptions } from './styled';
import MobileMenu from '../MobileMenu/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/Images/logo-final.png'

const Header = () => {
  const [t, i18n] = useTranslation('global');

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const setBodyFixed = () => {
    document.body.classList.toggle('fixed');
  };

  const handleChangeLangs = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
  };

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
          />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/">{t('Header.home')}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{t('Header.about')}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t('Header.contact')}</NavLink>
            </li>
            <li>
              <NavLink to="/projects">{t('Header.projects')}</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <StyledLangOptions
            id="language-select"
            onChange={(e) => handleChangeLangs(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ge">Georgian</option>
          </StyledLangOptions>
        </div>
        <FontAwesomeIcon
          className="burger-menu"
          icon={faNavicon}
          onClick={() => {
            setOpenMobileMenu(true);
            setBodyFixed();
          }}
        />
      </StyledHeaderContainer>
      <MobileMenu
        open={openMobileMenu}
        onClose={() => {
          setOpenMobileMenu(false);
          setBodyFixed();
        }}
      />
    </StyledHeader>
  );
};

export default Header;
