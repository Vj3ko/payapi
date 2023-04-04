import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device, mixins } from '../../Styles';
import blueCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { ReactComponent as FacebookLogo } from '../../assets/shared/desktop/facebook.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/shared/desktop/linkedin.svg';
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as TwitterLogo } from '../../assets/shared/desktop/twitter.svg';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.mirageBlue};
  background-image: url(${blueCircle});
  background-position: center 11.25rem;
  background-repeat: no-repeat;
  background-size: 48.75rem;
  padding: 2.5rem 1.5rem;

  @media ${device.tablet} {
    background-position: 23.625rem -8.5rem;
  }

  @media ${device.laptopL} {
    background-position: 65.625rem -8.5rem;
    padding: 2.5rem 2.5rem;
  }

  @media ${device.desktop} {
    background-position: 93.75rem -9.375rem;
  }

  .container {
    ${mixins.flex('center', 'center')};
    flex-direction: column;
    gap: 2.5rem;
    margin: auto;

    @media ${device.tablet} {
      flex-direction: row;
      justify-content: space-between;
    }

    @media ${device.laptop} {
      max-width: ${({ theme }) => theme.mWidthLaptop};
    }

    @media ${device.desktop} {
      max-width: ${({ theme }) => theme.mWidthDesktop};
    }
  }

  .footer--logo {
    fill: ${({ theme }) => theme.colors.waterWhite};
  }

  ul {
    ${mixins.flex('center', 'center')};
    flex-direction: column;
    gap: 1.875rem;

    @media ${device.tablet} {
      flex-direction: row;
      margin-right: auto;
      margin-left: 4rem;
    }

    li {
      a {
        color: ${({ theme }) => theme.colors.waterWhite};
        opacity: 0.7;
        transition: ${({ theme }) => theme.transition};

        &:hover,
        &:focus {
          opacity: 1;
        }
      }
    }
  }

  .social {
    ${mixins.flex('center', 'center')};
    gap: 1.5rem;

    a {
      display: inherit;

      svg {
        fill: ${({ theme }) => theme.colors.waterWhite};
        transition: ${({ theme }) => theme.transition};
      }

      &:hover svg,
      :focus svg {
        fill: ${({ theme }) => theme.colors.charmPink};
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className='container'>
        <a href='/'><Logo className='footer--logo' /></a>

        <ul>
          <li><Link to='/pricing'>Pricing</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <div className='social'>
          <a rel='noreferrer' target="_blank" href='https://www.facebook.com'><FacebookLogo /></a>
          <a rel='noreferrer' target="_blank" href='https://www.twitter.com'><TwitterLogo /></a>
          <a rel='noreferrer' target="_blank" href='https://www.linkedin.com'><LinkedinLogo /></a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
