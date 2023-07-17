import styled from 'styled-components'

export const ErrorModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 2px solid #000;
  text-align: center;
  padding: 2rem 4rem;

  p,
  span {
    margin-bottom: 2rem;
    display: block;
  }

  span {
    color: #ef4f4f;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 2rem 1rem;
    width: 90%;
    button {
      width: 100%;
    }
  }
`
