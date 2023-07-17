import { NavStyle, Logo } from './wrappers/NavStyles'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export const Nav = () => {
  const appIcon = <FontAwesomeIcon icon={faGlobe} />

  return (
    <NavStyle>
      <Link to="/">
        <Logo>
          <span>{appIcon}</span>
          <span>linkApp</span>
        </Logo>
      </Link>
    </NavStyle>
  )
}
