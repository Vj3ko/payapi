import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedComponent from '../../AnimatedComponent/AnimatedComponent';
import { device, mixins } from '../../Styles';
import { fadeFromLeft } from "../../animations";
import phoneImg from '../../assets/home/desktop/illustration-phone-mockup.svg';
import { Circle, Start } from '../Elements';
import Banner from "./Banner/Banner";
import Hero from "./Hero/Hero";

const SectionStyled = styled.section`
  position: relative;
  z-index: 5;
  padding: ${({ theme }) => theme.sectionPaddingS};

  @media ${device.tablet} {
    padding: ${({ theme }) => theme.sectionPaddingM};
  }

  @media ${device.laptop} {
    padding: ${({ theme }) => theme.sectionPaddingL};
  }

  .container {
    ${mixins.flex('center', 'center')}
    flex-direction: column;

    max-width: ${({ theme }) => theme.mWidthLaptop};
    margin: auto;

    @media ${device.laptop} {
      flex-direction: row-reverse;
      justify-content: space-between;
    }

    @media ${device.desktop} {
      max-width: ${({ theme }) => theme.mWidthDesktop};
    }
  }

  .img {
    width: 8rem;
    height: 15rem;

    @media ${device.tablet} {
      width: 9.938rem;
      height: 18.75rem;
    }

    @media ${device.laptop} {
      width: 16.438rem;
      height: 31.25rem;
      margin-right: 5.938rem;
    }
  }

  .wrapper {
    margin-top: 1.5rem;
    max-width: 35.813rem;

    & > div {
      margin-left: 0;
      padding: 1.5rem 0;
      justify-content: unset;

      @media ${device.laptop} {
        margin-top: 1.25rem;
      }
    }

    @media ${device.tablet} {
      margin-top: 3rem;
    }

    @media ${device.laptop} {
      max-width: 34.125rem;
    }
  }

  h1 {
    @media ${device.laptop} {
      text-align: left;
    }
  }

  p {
    text-align: center;

    @media ${device.laptop} {
      text-align: left;
      margin-left: 1.688rem;
    }

    .link {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.lightJuanBlue};
    }
  }
`;

const Home = () => {
  return (
    <AnimatedComponent>
      <SectionStyled >
        <Circle page="home" />
        <motion.div className='container' variants={fadeFromLeft} initial="hide" whileInView="show" viewport={{ once: true }}>
          <img className='img' src={phoneImg} alt='mobile phone' />

          <div className='wrapper'>
            <h1>Start building with our APIs for absolutely free.</h1>
            <Start title='' />
            <p>
              Have any questions?
              <Link to='/contact' className='link'>Contact Us</Link>
            </p>
          </div>
        </motion.div>
      </SectionStyled>
      <Banner />
      <Hero />
    </AnimatedComponent>
  );
}

export default Home