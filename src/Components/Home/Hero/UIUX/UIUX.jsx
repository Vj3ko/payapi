import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device, mixins } from '../../../../Styles';
import { fadeFromRight } from '../../../../animations';
import uiuxImg from '../../../../assets/home/desktop/illustration-simple-ui.svg';

const StyledDiv = styled(motion.div)`
  margin: auto;
  width: 100%;
  text-align: center;
  max-width: 35.813rem;

  @media ${device.laptop} {
    ${mixins.flex('space-between', 'center')}
    flex-direction: row-reverse;
    max-width: ${({ theme }) => theme.mWidthLaptop};
  }

  @media ${device.desktop} {
    max-width: ${({ theme }) => theme.mWidthDesktop};
  }

  img {
    width: 100%;
    max-width: 27.813rem;
    box-shadow: 0.625rem 0.625rem 2.5rem ${({ theme }) => theme.colors.lightJuanBlue};
  }

  .wrapper {
    max-width: 27.813rem;
    margin: auto;
    margin-top: 3rem;

    @media ${device.laptop} {
      margin: unset;
    }

    p {
      margin-top: 1.5rem;
      line-height: 1.75rem;
      color: ${({ theme }) => theme.colors.lightJuanBlue};
    }
  }
`;

const UIUX = () => {
  return (
    <StyledDiv className='container' variants={fadeFromRight} initial="hide" whileInView="show" viewport={{ once: true }}>
      <img src={uiuxImg} alt='code implementation instructions' />
      <div className='wrapper'>
        <h2>Simple UI & UX</h2>
        <p>
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
    </StyledDiv>
  );
};

export default UIUX;
