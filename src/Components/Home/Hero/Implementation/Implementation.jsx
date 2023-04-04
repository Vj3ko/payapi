import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device, mixins } from '../../../../Styles';
import { fadeFromLeft } from '../../../../animations';
import implementationImg from '../../../../assets/home/desktop/illustration-easy-to-implement.svg';

const StyledDiv = styled(motion.div)`
  width: 100%;
  text-align: center;
  max-width: 35.813rem;
  margin: auto;

  @media ${device.laptop} {
    ${mixins.flex('space-between', 'center')}
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

const Implementation = () => {
  return (
    <StyledDiv className='container' variants={fadeFromLeft} initial="hide" whileInView="show" viewport={{ once: true }}>
      <img src={implementationImg} alt='code implementation instructions' />
      <div className='wrapper'>
        <h2>Easy to implement</h2>
        <p>
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
    </StyledDiv >
  );
};

export default Implementation;
