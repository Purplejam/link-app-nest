import styled from 'styled-components'

export const NavStyle = styled.nav`
  padding: 0 5rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(32, 33, 36, 0.28);
  background-color: #4d4c5c;

  ul {
    li {
      display: inline-block;
      padding: 0rem 0.5rem;
      font-weight: 400;
      cursor: pointer;
      font-size: 0.7rem;
      text-transform: uppercase;
      a {
        padding: 1.5rem 0rem;
        line-height: 3.8rem;
        color: #fff;
      }
      &:after {
        display: block;
        content: '';
        border-bottom: solid 0.1rem #fff;
        transform: scaleX(0);
        transition: transform 180ms ease-in-out;
        transform-origin: 0% 50%;
      }
      &:before {
        display: block;
        content: '';
        border-bottom: solid 0.1rem #fff;
        transform: scaleX(0);
        transition: transform 180ms ease-in-out;
        transform-origin: 0% 50%;
      }
      &:hover:after {
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 630px) {
    padding: 0 2rem;
  }

  @media (max-width: 430px) {
    padding: 0 1rem;

    ul li {
      font-size: 0.6rem;
    }

    .about-link {
      display: none;
    }
  }

  @media (max-width: 330px) {
    padding: 0 0.5rem;
  }
`

export const Logo = styled.h3`
  font-family: 'Kanit', sans-serif;
  cursor: pointer;
  color: #fff;
  svg {
    padding-right: 0.5rem;
  }
`
