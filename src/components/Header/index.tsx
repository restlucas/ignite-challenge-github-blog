import { NavLink } from 'react-router-dom'

import logoSvg from '../../assets/logo.svg'
import { HeaderContainer, Logo } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Logo src={logoSvg} alt="GitHub Blog Logo" />
      </NavLink>
    </HeaderContainer>
  )
}
