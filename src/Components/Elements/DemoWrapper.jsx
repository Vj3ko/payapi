import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device, mixins } from '../../Styles';

const StyledLink = styled(Link)`
  width: 100%;
  height: 3rem;
  border-radius: 3.125rem;
  border: none;
  outline: none;
  ${mixins.flex('center', 'center')}
  background: ${({ theme }) => theme.colors.darkPink};
  color: ${({ theme }) => theme.colors.waterWhite};
  font-weight: 600;
  transition: background ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.charmPink};
  }

  @media ${device.tablet} {
    width: 10.813rem;
  }
`;

const DemoWrapper = () => {
  return <StyledLink to='/contact'>Schedule a Demo</StyledLink>;
};

export default DemoWrapper;
