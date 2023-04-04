import { createGlobalStyle } from 'styled-components';
import { device } from '../Breakpoints';

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Public Sans', sans-serif;
    font-size: 0.938rem;
  }

  #root {
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'DM Serif Display', serif;
    color: ${({ theme }) => theme.colors.sanJuanBlue};
  }

  h1{
    font-size: 2rem;
    line-height: 2.25rem;
    text-align: center;
    font-weight: lighter;
    letter-spacing: -0.016rem;

    &.small {
      @media ${device.laptop} {
      font-size: 3.5rem;
      line-height: 3.5rem;
      letter-spacing: -0.027rem;
      }
    }

    @media ${device.tablet} {
      font-size: 3rem;
      line-height: 3.5rem;
      letter-spacing: -0.023rem;
    }

    @media ${device.laptop} {
      font-size: 4.5rem;
      line-height: 4.5rem;
      letter-spacing: -0.034rem;
    }
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.25rem;
    letter-spacing: -0.018rem;
    font-weight: lighter;

    @media ${device.tablet} {
      font-size: 3rem;
      line-height: 3.5rem;
      letter-spacing: -0.023rem;
    }
  }

  h3{
    font-size: 2rem;
    line-height: 2.25rem;
    letter-spacing: -0.016rem;
    font-weight: lighter;

    @media ${device.tablet} {
      font-size: 3rem;
      line-height: 3.5rem;
      letter-spacing: -0.023rem;
    }
  }

  h4{
    font-size: 1.125rem;
    line-height:1.563rem;
    letter-spacing: -0.009rem;
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.sanJuanBlue};
  }

  h5{
    font-size:1.5rem;
    line-height: 2rem;
    letter-spacing: -0.011rem;
    font-weight: lighter;

    @media ${device.tablet} {
      line-height: 2.5rem; 
    }

    @media ${device.laptop} {
      font-size: 2rem;
      letter-spacing: -0.016rem;
    }

  }

  hr {
    background-color: ${({ theme }) => theme.colors.lightJuanBlue};
    opacity: 0.4;
    border: none;
    height: 0.063rem;
  }

  p{
    line-height:1.563rem;
    letter-spacing: -0.007rem;
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.lightJuanBlue};
  }

  input,a {
    font-family: 'Public Sans', sans-serif;
    cursor: pointer;
  }

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.sanJuanBlue};
  }

  button{
    cursor: pointer;
  }
`;
