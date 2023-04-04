import { motion } from 'framer-motion'
import styled from 'styled-components'
import { device } from '../../Styles'
import circleImg from "../../assets/shared/desktop/bg-pattern-circle.svg"

const StyledCircle = styled(motion.div)`
  position: absolute;
  left: ${({ page }) => page === "home" ? "-12.313rem" : "6.25rem"};
  top: ${({ page }) => page === "home" ? "-37.5rem" : "-43.75rem"};
  width: 48.75rem;
  height: 48.75rem;
  z-index: -1;

  @media ${device.tablet} {
    left: ${({ page }) => page === "home" ? "-5.688rem" : "31.563rem"};
    top: ${({ page }) => page === "home" ? "-35.625rem" : "-34.375rem"};
    width: ${({ page }) => page === "home" ? "59.375rem" : "48.75rem"};
  }

  @media ${device.laptop} {
    left: ${({ page }) => page === "home" ? "1.25rem" : "37.5rem"};
    top: ${({ page }) => page === "home" ? "-35.625rem" : "-37.5rem"};
    width: ${({ page }) => page === "home" ? "59.375rem" : "48.75rem"};
  }

  @media ${device.laptopL} {
    left: ${({ page }) => page === "home" ? "50rem" : "50rem"};
    top: ${({ page }) => page === "home" ? "-10.75rem" : "-32.938rem"};
    width: ${({ page }) => page === "home" ? "48.75rem" : "48.75rem"};
  }

  @media ${device.desktop} {
    left: ${({ page }) => page === "home" ? "78.125rem" : "50rem"};
    top: ${({ page }) => page === "home" ? "-21.875rem" : "-32.938rem"};
    width: ${({ page }) => page === "home" ? "48.75rem" : "48.75rem"};
  }

  .circle {
    width: 100%;
    height: 100%;
  }
`

const Circle = ({ page }) => {
  return (
    <StyledCircle page={page} animate={{ y: ["-100%", "0%"], transition: { duration: .7, delay: .5 } }}>
      <img className='circle' src={circleImg} alt="blue circle" />
    </StyledCircle>
  )
}

export default Circle