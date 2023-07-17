import styled from 'styled-components'

export const CreateLinkStyle = styled.div`
  padding: 2rem 0;
  text-align: center;
`

export const CreateLinkModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 2px solid #000;
  text-align: center;
  padding: 2rem 4rem;

  span {
    color: #ef4f4f;
  }

  button:nth-child(1) {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 2rem 1rem;
    width: 90%;
    button:nth-child(1) {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
    button {
      width: 100%;
    }
  }
`
