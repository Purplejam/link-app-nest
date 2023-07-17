import { createGlobalStyle } from 'styled-components'

const red = '#EF4F4F'
const lightred = '#EE9595'
const darkblue = '#6B7AA1'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    &::-webkit-scrollbar{
        width: .5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;
    }
    &::-webkit-scrollbar-track {
    background: white;
    }
  }
  body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }
  .container {
    padding: 0rem 5rem 5rem 5rem;
    min-height: calc(100vh - 4rem);      
  }
  h2{
      font-size: 2rem;
      font-weight: 600;
      color: #333;
      padding: 1.5rem 0rem;
  }
  h3{ 
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0rem;
  }
  p{
    font-size: .9rem;
    line-height: 170%;
    color: #696969;
  }
  .loading-gif {
    font-size: 2rem;
    opacity: .8;
  }
  tspan {
    font-size: .7rem !important;
  }
  li{
    text-decoration: none;
    color: #333;   
  }
  a{
    text-decoration: none;
    color: #333;

  }
  img{
      display: block;
  }
  button.main-button {
    padding: .4rem 1.5rem;
    background-color: ${red};
    border-radius: 24px;
    box-shadow: rgba(239,79,79, .2) 0 3px 5px -1px,rgba(239,79,79, .14) 0 6px 10px 0,rgba(239,79,79, .12) 0 1px 18px 0;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    border: 2px solid ${red};
    transition: all 100ms ease-in;
    &:hover {
      background-color: #F27474;
      border: 2px solid #F27474;
    }
    &.inactive:hover {
      background-color: #EE9595;
      border: 2px solid #EE9595;            
    }
    svg {
      padding-left: 1rem;
    }
  }
  button.simple-button {
    box-shadow: rgba(107,122,161, .1) 0 3px 5px -1px,rgba(107,122,161, .1) 0 6px 10px 0,rgba(107,122,161, .1) 0 1px 18px 0;
    padding: .4rem 2rem;
    border-radius: 24px;
    background-color: transparent;
    font-size: 1rem;
    color: #4855ab;
    cursor: pointer;
    border: 2px solid #4855ab;
    transition: all 100ms ease-in;
    &:hover {
      color: #fff;
      background-color: #4855ab;
    }
  }
  button.simple-button.inverse {
     color: #fff;
     background-color: #4855ab;  
     &:hover {
       background-color: transparent;
       color: #4855ab;
     }  
  }
  button.inactive {
    background-color: ${lightred};
    border: 2px solid ${lightred};
    cursor: not-allowed;
  }
  .center {
    text-align: center;
  }
  .loader-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .lds-ellipsis div {
      width: 18px;
      height: 18px;
    }
  }


  @media (max-width: 768px) {
     .container {
       padding: 0rem 2rem 2rem 2rem;
     }
     h3 {
         font-size: 1rem;
         padding: 1rem 0rem;
     }
     h4 {
         font-size: .8rem;
         padding: 1rem 0rem;
     }
     label p, p, li, b, tspan {
        font-size: .7rem;
     }
     button.main-button, button.simple-button {
        font-size: .8rem; 
     }
     h2 {
         font-size: 2rem;
     } 
  }
 @media (max-width: 415px) {
   .container {
     padding: 0rem 1rem 2rem 1rem;
   }
  .button-container {
    width: 100%;
    text-align: center;
  }
   h2 {
       font-size: 1.7rem;
   } 
 }
 @media (max-width: 330px) {
   .container {
     padding: 0rem .5rem 2rem .5rem;
   }
 }
`
