import { motion } from 'framer-motion';
import styled from 'styled-components';
import AnimatedComponent from '../../AnimatedComponent/AnimatedComponent';
import { device, mixins } from '../../Styles';
import { fadeFromLeft } from '../../animations';
import checkmark from '../../assets/shared/desktop/icon-check.svg';
import { Circle, Start } from '../Elements';



const allOptions = [
  'Transaction',
  'Auth',
  'Identity',
  'Investments',
  'Assets',
  'Liabilities',
  'Income',
];

const plans = [
  {
    title: 'Free Plan',
    description:
      'Build and test using our core set of products with up to 100 API requests',
    price: '$0.00',
    includes: 3,
  },
  {
    title: 'Basic Plan',
    description:
      'Launch your project with unlimited requests and no contractual minimums ',
    price: '$249.00',
    includes: 5,
  },
  {
    title: 'Premium Plan',
    description:
      'Get tailored solutions, volume pricing, and dedicated support for your team ',
    price: '$499.00',
    includes: 7,
  },
];

const StyledSection = styled.section`
  padding: ${({ theme }) => theme.sectionPaddingS};
  position: relative;

  @media ${device.tablet} {
    padding: ${({ theme }) => theme.sectionPaddingM};
  }

  @media ${device.laptop} { 
    padding: ${({ theme }) => theme.sectionPaddingL};
  }

  .container {
    max-width: ${({ theme }) => theme.mWidthLaptop};
    margin: auto;

    @media ${device.desktop} {
      max-width: ${({ theme }) => theme.mWidthDesktop};
    }
  }

  h1 {
    @media ${device.laptopL} {
      text-align: left;
    }
  }

  .plans-wrapper {
    margin: 3rem 0;
    ${mixins.flex('center', 'center')};
    flex-direction: column;
    gap: 3rem;

    @media ${device.tablet} {
      flex-direction: row;
      gap: 0.625rem;
      margin: 4.375rem 0;
    }

    @media ${device.laptopL} {
      gap: 1.875rem;
    }
  }

  .plan {
    ${mixins.flex('center', 'center')};
    flex-direction: column;
    gap: 1.5rem;

    .line {
      width: 100%;
    }

    &__head {
      text-align: center;

      @media ${device.laptopL} {
        text-align: left;
      }

      &_name {
        color: ${({ theme }) => theme.colors.darkPink};
      }

      &_description {
        margin-top: 1.063rem;
        opacity: 0.7;
      }

      &_price {
        font-size: 3.5rem;
        line-height: 4.5rem;
        letter-spacing: -0.027rem;
        font-weight: lighter;
        font-family: 'DM Serif Display', serif;
        color: ${({ theme }) => theme.colors.sanJuanBlue};
        display: block;

        @media ${device.tablet} {
          margin-top: 1.25rem;
          font-size: 3rem;
        }

        @media ${device.laptopL} {
          font-size: 3.5rem;
        }
      }
    }

    &__list {
      @media ${device.laptopL} {
        align-self: flex-start;
      }
    }

    .plan--cta {
      font-size: 0.938rem;
      font-weight: 600;
      letter-spacing: -0.007rem;
      padding: 0.938rem 1.75rem;
      border-radius: 3.125rem;
      color: ${({ theme }) => theme.colors.sanJuanBlue};
      border: 0.063rem solid ${({ theme }) => theme.colors.sanJuanBlue};
      background: transparent;
      transition: ${({ theme }) => theme.transition};

      &:focus,
      &:hover {
        background: ${({ theme }) => theme.colors.mirageBlue};
        color: ${({ theme }) => theme.colors.waterWhite};
      }

      @media ${device.laptopL} {
        align-self: flex-start;
      }
    }
  }
`;

const StyledListItem = styled.li`
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.sanJuanBlue};
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;
  opacity: 0.5;

  &:nth-child(-n + ${({ num }) => num}) {
    opacity: 1;
  }

  //checkmark
  &::before {
    content: url(${checkmark});
    display: block;
    position: relative;
    margin-right: 1.875rem;
    opacity: 0;
    visibility: hidden;
  }

  //only show checkmarks depending on plan
  &:nth-child(-n + ${({ num }) => num})::before {
    visibility: visible;
    opacity: 1;
  }
`;

const Pricing = () => {

  return (
    <AnimatedComponent>
      <StyledSection>
        <Circle page="pricing" />
        <div className='container'>
          <h1 className='small'>Pricing</h1>
          <motion.div className='plans-wrapper' variants={fadeFromLeft} initial="hide" whileInView="show" viewport={{ once: true }}>
            {plans.map(plan => (
              <div
                className='plan'
                key={plan.title}
              >
                <div className='plan__head'>
                  <h5 className='plan__head_name'>{plan.title}</h5>
                  <p className='plan__head_description'>{plan.description}</p>
                  <span className='plan__head_price'>{plan.price}</span>
                </div>
                <hr className='line' />
                <ul className='plan__list'>
                  {allOptions.map((option, index) => (
                    <StyledListItem
                      num={plan.includes}
                      key={index}
                    >
                      {option}
                    </StyledListItem>
                  ))}
                </ul>
                <hr className='line' />
                <button className='plan--cta'>Request Access</button>
              </div>
            ))}
          </motion.div>
          <Start title='Ready to start?' />
        </div>
      </StyledSection>
    </AnimatedComponent>
  );
};

export default Pricing;
