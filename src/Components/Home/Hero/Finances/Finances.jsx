import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device, mixins } from '../../../../Styles';
import { fadeFromLeft } from '../../../../animations';
import bankingImg from '../../../../assets/home/desktop/icon-banking-and-coverage.svg';
import consumerImg from '../../../../assets/home/desktop/icon-consumer-payments.svg';
import financeImg from '../../../../assets/home/desktop/icon-personal-finances.svg';

const StyledDiv = styled(motion.div)`
  ${mixins.flex('center,center')}
  flex-direction: column;
  gap: 3rem;
  margin: auto;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 1.25rem;
  }

  @media ${device.laptop} {
    max-width: ${({ theme }) => theme.mWidthLaptop};
  }

  @media ${device.desktop} {
    max-width: ${({ theme }) => theme.mWidthDesktop};
    gap: 5rem;
  }

  .item {
    text-align: center;

    h4 {
      margin-top: 2.063rem;
    }

    p {
      margin-top: 1rem;
    }
  }
`;

const Finances = () => {
  return (
    <StyledDiv className='container' variants={fadeFromLeft} initial="hide" whileInView="show" viewport={{ once: true }}>
      <div className='item'>
        <img src={financeImg} alt='bag full of money' />
        <h4>Personal Finances</h4>
        <p>
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </p>
      </div>
      <div className='item'>
        <img src={bankingImg} alt='chart' />
        <h4>Banking & Coverage</h4>
        <p>
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </p>
      </div>
      <div className='item'>
        <img src={consumerImg} alt='credit card' />
        <h4>Consumer Payments</h4>
        <p>
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </p>
      </div>
    </StyledDiv>
  );
};

export default Finances;
