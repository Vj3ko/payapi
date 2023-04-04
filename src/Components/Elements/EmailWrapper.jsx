import styled from 'styled-components';
import { device, mixins } from '../../Styles';
import DemoWrapper from './DemoWrapper';

const StyledDiv = styled.div`
  padding: 1.5rem 0;
  ${mixins.flex('center', 'center')}
  flex-direction: column;
  gap: 1rem;
  position: relative;
  max-width: 27.813rem;
  margin: auto;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    margin-left: 0;
    margin-top: 1.313rem;
  }

  input::placeholder {
    font-weight: 700;
    opacity: 0.5;
    color: ${({ theme }) => theme.colors.sanJuanBlue};
  }

  input {
    width: 100%;
    height: 3rem;
    font-weight: bolder;
    border-radius: 3.125rem;
    outline: none;
    border: none;
    padding-left: 1.688rem;
    color: ${({ theme }) => theme.colors.sanJuanBlue};
    box-shadow: ${({ theme }) => theme.boxShadow};

    &:focus {
      outline: 0;
      border: 0;
    }
  }

  a {
    @media ${device.tablet} {
      position: absolute;
      right: 0;
    }
  }
`;

const EmailWrapper = () => {
  return (
    <StyledDiv>
      <input type='email' name='email' placeholder='Enter email address' maxLength={35}
      />
      <DemoWrapper />
    </StyledDiv>
  );
};

export default EmailWrapper;
