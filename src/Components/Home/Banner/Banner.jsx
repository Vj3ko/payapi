import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device, mixins } from '../../../Styles';
import { fadeFromRight } from '../../../animations';
import blueCircle from '../../../assets/shared/desktop/bg-pattern-circle.svg';
import { Associates } from '../../Elements';

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.mirageBlue};
  background-image: url(${blueCircle});
  background-position: center -37.625rem;
  background-repeat: no-repeat;
  background-size: 48.75rem;
  padding: ${({ theme }) => theme.sectionPaddingS};

  @media ${device.tablet} {
    background-position: center -34.375rem;
  }

  @media ${device.laptop} {
    background-position: -14.688rem -22.438rem;
    padding: ${({ theme }) => theme.sectionPaddingM};
  }

  @media ${device.laptopL} {
    background-position: -14.063rem -22.5rem;
  }

  @media ${device.desktop} {
    background-size: 62.5rem;
    background-position: 9.375rem -37.5rem;
  }

  .container {
    max-width: ${({ theme }) => theme.mWidthLaptop};
    margin: auto;

    @media ${device.laptop} {
      ${mixins.flex('space-between', 'center')}

      flex-direction: row-reverse;
      gap: 6.25rem;
    }

    @media ${device.desktop} {
      max-width: ${({ theme }) => theme.mWidthDesktop};
    }

    @media ${device.laptopL} {
      gap: 0;
    }
  }

  svg {
    fill: ${({ theme }) => theme.colors.waterWhite};
  }

  .banner__info {
    text-align: center;
    max-width: 28.75rem;
    margin: auto;
    margin-top: 3.5rem;

    @media ${device.laptop} {
      text-align: left;
      margin: 0;
    }

    h2 {
      color: ${({ theme }) => theme.colors.waterWhite};
    }

    p {
      margin-top: 1.5rem;
      color: ${({ theme }) => theme.colors.waterWhite};
      opacity: 0.7;
      line-height: 1.75rem;
    }

    a {
      display: inline-block;
      font-weight: bolder;
      margin-top: 2rem;
      padding: 0.938rem 2rem;
      border: 0.063rem solid white;
      border-radius: 1.875rem;
      color: ${({ theme }) => theme.colors.waterWhite};
      background: transparent;
      transition: ${({ theme }) => theme.transition};

      &:focus,
      &:hover {
        background: ${({ theme }) => theme.colors.waterWhite};
        color: ${({ theme }) => theme.colors.mirageBlue};
      }
    }
  }
`;

const Banner = () => {
  return (
    <StyledSection>
      <motion.div className='container' variants={fadeFromRight} initial="hide" whileInView="show" viewport={{ once: true }}>
        <Associates />
        <div className='banner__info'>
          <h2>Who we work with</h2>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Link to='/about'>About Us</Link>
        </div>
      </motion.div>
    </StyledSection>
  );
};

export default Banner;
