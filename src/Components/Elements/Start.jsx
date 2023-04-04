import styled from 'styled-components';
import { device, mixins } from '../../Styles';
import EmailWrapper from './EmailWrapper';

const StyledDiv = styled.div`
  width: 100%;
  @media ${device.laptop} {
    ${mixins.flex('space-between', 'center')};
    max-width: ${({ theme }) => theme.mWidthLaptop};
    margin: auto;
  }

  @media ${device.desktop} {
    max-width: ${({ theme }) => theme.mWidthDesktop};
  }

  h3 {
    text-align: center;
  }

  div {
    @media ${device.laptop} {
      margin: 0;
      padding: 0;
      width: 27.813rem;
    }
  }
`;

const Start = ({ title }) => {
  return (
    <StyledDiv>
      <h3>{title}</h3>
      <EmailWrapper />
    </StyledDiv>
  );
};

export default Start;
