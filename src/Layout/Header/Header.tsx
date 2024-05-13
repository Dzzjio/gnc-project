import { NavLink } from 'react-router-dom'
import { StyledHeader, StyledHeaderContainer } from './styled'
import { useState } from 'react'
import MobileMenu from '../MobileMenu/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [t, i18n] = useTranslation('global')

  const [showGeoFlag, setShowGeoFlag] = useState<boolean>(true)
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)

  const setBodyFixed = () => {
    document.body.classList.toggle('fixed')
  }

  const handleChangeLangs = (lang: string) => {
    i18n.changeLanguage(lang)
    setShowGeoFlag((prev) => !prev)
  }

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <NavLink to="/">
          <img
            src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png"
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
          {showGeoFlag ? (
            <img
              className="flag-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1280px-Flag_of_Georgia.svg.png"
              alt="geo"
              onClick={() => handleChangeLangs('en')}
            />
          ) : (
            <img
              className="flag-img"
              src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg"
              alt="uk"
              onClick={() => handleChangeLangs('ge')}
            />
          )}
        </div>
        <FontAwesomeIcon
          className="burger-menu"
          icon={faNavicon}
          onClick={() => {
            setOpenMobileMenu(true)
            setBodyFixed()
          }}
        />
      </StyledHeaderContainer>
      <MobileMenu
        open={openMobileMenu}
        onClose={() => {
          setOpenMobileMenu(false)
          setBodyFixed()
        }}
      />
    </StyledHeader>
  )
}

export default Header
