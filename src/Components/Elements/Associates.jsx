import styled from 'styled-components';
import { device } from '../../Styles';
import { ReactComponent as GoogleLogo } from '../../assets/shared/desktop/google.svg';
import { ReactComponent as HpLogo } from '../../assets/shared/desktop/hewlett-packard.svg';
import { ReactComponent as MicrosoftLogo } from '../../assets/shared/desktop/microsoft.svg';
import { ReactComponent as NvidiaLogo } from '../../assets/shared/desktop/nvidia.svg';
import { ReactComponent as OracleLogo } from '../../assets/shared/desktop/oracle.svg';
import { ReactComponent as TeslaLogo } from '../../assets/shared/desktop/tesla.svg';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 2.5rem;
  max-width: 33.5rem;
  margin: auto;

  @media ${device.mobileM} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${device.laptop} {
    margin: 0;
  }
`;

const Associates = () => {
  return (
    <StyledDiv>
      <TeslaLogo />
      <MicrosoftLogo />
      <HpLogo />
      <OracleLogo />
      <GoogleLogo />
      <NvidiaLogo />
    </StyledDiv>
  );
};

export default Associates;
