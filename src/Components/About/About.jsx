import { motion } from 'framer-motion';
import styled from 'styled-components';
import AnimatedComponent from '../../AnimatedComponent/AnimatedComponent';
import { device, mixins } from '../../Styles';
import { fadeFromLeft, fadeFromRight } from '../../animations';
import imageL from '../../assets/about/desktop/image-team-members.jpg';
import imageS from '../../assets/about/mobile/image-team-members.jpg';
import imageM from '../../assets/about/tablet/image-team-members.jpg';
import { Circle, Start } from '../Elements';



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
    max-width: 38.75rem;
    margin: auto;

    @media ${device.laptopL} {
      margin-left: 0;
      text-align: left;
      max-width: 45.625rem;
    }
  }

  .img--container {
    width: 100%;

    img {
      max-width: 100%;
      content: url(${imageS});

      @media ${device.tablet} {
        content: url(${imageM});
      }

      @media ${device.laptop} {
        content: url(${imageL});
      }
    }
  }

  .about--wrapper {
    ${mixins.flex('center', 'center')};
    flex-direction: column;
    gap: 3rem;

    @media ${device.tablet} {
      gap: 3.375rem;
    }

    @media ${device.laptop} {
      gap: 4.375rem;
    }

    @media ${device.laptopL} {
      gap: 6.25rem;
    }
  }

  .stats {
    width: 100%;
    padding: 1rem 0;
    ${mixins.flex('center', 'center')}
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    border-top: 0.063rem solid rgba(54, 83, 107, 0.25);
    border-bottom: 0.063rem solid rgba(54, 83, 107, 0.25);

    @media ${device.tablet} {
      border: none;
      flex-direction: row;
      gap: 0.625rem;
      text-align: left;

      & > div {
        flex: 1;
        border-top: 0.063rem solid rgba(54, 83, 107, 0.25);
        border-bottom: 0.063rem solid rgba(54, 83, 107, 0.25);
        padding: 1.063rem 0;
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.75rem;
      color: ${({ theme }) => theme.colors.sanJuanBlue};
      opacity: 0.7;
    }

    span {
      font-family: 'DM Serif Display', serif;
      font-size: 3.5rem;
      line-height: 4.5rem;
      letter-spacing: -0.027rem;
      color: ${({ theme }) => theme.colors.darkPink};
    }
  }
`;

const pillars = [
  {
    title: 'Our Vision',
    description:
      'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. ',
  },
  {
    title: 'Our Business',
    description:
      'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. ',
  },
  {
    title: 'The Culture',
    description:
      "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title. ",
  },
  {
    title: 'The People',
    description:
      "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
  },
];

const About = () => {


  return (
    <AnimatedComponent>
      <StyledSection>
        <Circle page="about" />
        <div className='container'>
          <div className='about--wrapper'>
            <h1 className='small'>We empower innovators by delivering access to the financial system</h1>
            <Pillar title={pillars[0].title} description={pillars[0].description} />
            <Pillar title={pillars[1].title} description={pillars[1].description} />
            <motion.div className='img--container' variants={fadeFromRight} initial="hide" whileInView="show" viewport={{ once: true }}>
              <img alt='group of people working together' />
            </motion.div>
            <motion.div className='stats' variants={fadeFromRight} initial="hide" whileInView="show" viewport={{ once: true }}>
              <div>
                <p>Team Members</p>
                <span>300+</span>
              </div>
              <div>
                <p>Offices in the US</p>
                <span>3</span>
              </div>
              <div>
                <p>Transactions analyzed</p>
                <span>10M+</span>
              </div>
            </motion.div>
            <Pillar title={pillars[2].title} description={pillars[2].description} />
            <Pillar title={pillars[3].title} description={pillars[3].description} />
            <Start title='Ready to start?' />
          </div>
        </div>
      </StyledSection>
    </AnimatedComponent>
  );
};

export default About;

const StyledDiv = styled(motion.div)`
  ${mixins.flex('center', 'center')}
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  @media ${device.tablet} {
    flex-direction: row;
    text-align: left;
    gap: 0;
  }

  h5 {
    @media ${device.tablet} {
      align-self: flex-start;
      white-space: nowrap;
      min-width: 13.938rem;
      line-height: 1.563rem;
    }

    @media ${device.laptop} {
      min-width: 15.938rem;
    }
  }
`;

const Pillar = ({ title, description }) => {
  return (
    <StyledDiv variants={fadeFromLeft} initial="hide" whileInView="show" viewport={{ once: true }}>
      <h5>{title}</h5>
      <p>{description}</p>
    </StyledDiv>
  );
};
