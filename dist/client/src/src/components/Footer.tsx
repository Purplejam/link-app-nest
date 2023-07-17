import { Link } from 'react-router-dom'
import { NavStyle, Logo } from './wrappers/NavStyles'

export const Footer = () => {
  return (
    <NavStyle>
      <Link to="/">
        <Logo>
          <span>Oleksandr K</span>
        </Logo>
      </Link>
    </NavStyle>
  )
}
