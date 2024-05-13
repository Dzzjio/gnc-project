import { NavLink } from 'react-router-dom'
import {
  Layout,
  MobileMenuContainer,
  MobileMenuContent,
  MobileMenuContentContainer,
} from './styled'
import { FC } from 'react'

interface IPropsMenu {
  open: boolean
  onClose: () => void
}

const MobileMenu: FC<IPropsMenu> = ({ open, onClose }) => {
  return (
    <MobileMenuContainer className={open ? 'open' : ''}>
      <Layout onClick={() => onClose()}></Layout>
      <MobileMenuContent>
        <MobileMenuContentContainer>
          <ul onClick={() => onClose()}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </MobileMenuContentContainer>
      </MobileMenuContent>
    </MobileMenuContainer>
  )
}

export default MobileMenu
