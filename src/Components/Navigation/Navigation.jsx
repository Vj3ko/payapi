import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device, mixins } from '../../Styles';
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/shared/mobile/close.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/shared/mobile/menu.svg';
import { DemoWrapper } from '../Elements';

const StyledHeader = styled.header`
  ${mixins.flex('center', 'center')};
  position: relative;
  width: 100%;
  padding: 2.5rem 1.5rem 0rem;
  background: transparent;
  z-index: 20;

  .container {
    ${mixins.flex('space-between', 'center')};
    max-width: ${({ theme }) => theme.mWidthLaptop};
    width: 100%;

    @media ${device.desktop} {
      max-width: ${({ theme }) => theme.mWidthDesktop};
    }
  }

  .header--btn {
    border: none;
    ${mixins.flex('center', 'center')}
    background:transparent;

    @media ${device.tablet} {
      display: none;
    }

    .icon--menu {
      fill: ${({ theme }) => theme.colors.mirageBlue};
    }
  }

  .logo {
    fill: ${({ theme }) => theme.colors.mirageBlue};
  }

  .nav--wrapper {
    position: absolute;
    top: 0rem;
    right: ${({ opened }) => (opened ? '0' : '-48rem')};
    width: 100%;
    height: 100vh;
    background: transparent;
    transition: right 350ms ease-in-out;
    z-index: 100;

    @media ${device.tablet} {
      position: relative;
      top: unset;
      right: unset;
      height: unset;
    }
  }

  .nav {
    display: flex;
    height: 100%;
    width: 75%;
    float: right;
    background: ${({ theme }) => theme.colors.mirageBlue};
    padding: 3rem 1.5rem;
    flex-direction: column;
    gap: 1.5rem;

    @media ${device.tablet} {
      width: 100%;
      float: unset;
      background: transparent;
      padding: unset;
      padding-left: 4rem;
    }

    button {
      width: fit-content;
      background: transparent;
      border: none;
      align-self: flex-end;

      @media ${device.tablet} {
        display: none;
      }

      .menu--close {
        fill: ${({ theme }) => theme.colors.waterWhite};
      }
    }

    hr {
      @media ${device.tablet} {
        display: none;
      }
    }

    .nav__list {
      ${mixins.flex('center', 'center')}
      flex-direction: column;
      gap: 2rem;
      margin-top: 1.25rem;

      @media ${device.tablet} {
        flex-direction: row;
        margin-top: unset;
        ${mixins.flex('unset', 'center')}
        gap: 2.5rem;
      }

      a:last-child {
        margin-left: auto;
      }

      &_item {
        font-size: 1.25rem;
        font-weight: 600;

        @media ${device.tablet} {
          font-size: 0.938rem;
          color: ${({ theme }) => theme.colors.sanJuanBlue};
        }

        .item__link {
          color: ${({ theme }) => theme.colors.waterWhite};
          opacity: 0.7;
          transition: ${({ theme }) => theme.transition};

          &:hover,
          &:focus {
            opacity: 1;
          }

          @media ${device.tablet} {
            color: ${({ theme }) => theme.colors.sanJuanBlue};
          }
        }
      }
    }
  }
`;

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  //prevents scrolling when mobile menu is opened
  useEffect(() => {
    if (openNav) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [openNav]);

  function toggleMenu() {
    setOpenNav(prev => !prev);
  }

  return (
    <StyledHeader opened={openNav} className='sticky-element'>
      <div className='container'>
        <a href='/'> <Logo className='logo' /> </a>
        <button className='header--btn' onClick={toggleMenu}>
          <HamburgerIcon className='icon--menu' />
        </button>

        <div className='nav--wrapper' onClick={toggleMenu}>
          <nav className='nav' onClick={e => e.stopPropagation()}>
            <button onClick={toggleMenu}>
              <CloseIcon className='menu--close' />
            </button>
            <hr />

            <ul className='nav__list'>
              <li className='nav__list_item'>
                <Link to='/pricing' className='item__link' onClick={() => setOpenNav(false)}>Pricing</Link>
              </li>
              <li className='nav__list_item'>
                <Link to='/about' className='item__link' onClick={() => setOpenNav(false)}>About</Link>
              </li>
              <li className='nav__list_item'>
                <Link to='/contact' className='item__link' onClick={() => setOpenNav(false)}>Contact</Link>
              </li>
              <DemoWrapper />
            </ul>

          </nav>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Navigation;
