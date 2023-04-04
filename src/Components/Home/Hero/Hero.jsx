import styled from 'styled-components';
import { device } from '../../../Styles';
import blueCircle from '../../../assets/shared/desktop/bg-pattern-circle.svg';
import { Start } from '../../Elements';
import Finances from './Finances/Finances';
import Implementation from './Implementation/Implementation';
import UIUX from './UIUX/UIUX';

const StyledSection = styled.section`
  padding: ${({ theme }) => theme.sectionPaddingS};
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media ${device.tablet} {
    gap: 6.25rem;
  }

  @media ${device.laptop} {
    padding: ${({ theme }) => theme.sectionPaddingM};
    gap: 9.375rem;
    background-image: url(${blueCircle});
    background-position: 160% center;
    background-repeat: no-repeat;
    background-size: 48.75rem;
  }

  @media ${device.laptopL} {
    background-size: 62.5rem;
    background-position: 150% center;
  }

  @media ${device.desktop} {
    background-position: 100% top;
    background-size: 62.5rem;
  }
`;

const Hero = () => {
  return (
    <StyledSection>
      <Implementation />
      <UIUX />
      <Finances />
      <Start title='Ready to start?' />
    </StyledSection>
  );
};

export default Hero;
