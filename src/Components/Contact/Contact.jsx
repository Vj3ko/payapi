import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import AnimatedComponent from '../../AnimatedComponent/AnimatedComponent';
import { device, mixins } from '../../Styles';
import { fadeFromLeft, fadeFromRight } from '../../animations';
import checkmark from '../../assets/shared/desktop/icon-check--white.svg';
import { Associates, Circle, Start } from '../Elements';



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

  .contact-wrapper {
    ${mixins.flex('center', 'center')}
    flex-direction: column;
    gap: 5rem;

    @media ${device.tablet} {
      gap: 4rem;
    }

    @media ${device.laptop} {
      gap: 6.25rem;
    }
  }

  .content-wrapper {
    ${mixins.flex('center', 'center')}
    flex-direction: column;
    gap: 5rem;

    @media ${device.laptop} {
      flex-direction: initial;
      gap: 7.5rem;
    }
  }

  .content {
    ${mixins.flex('center', 'center')}
    flex-direction: column;
    gap: 2rem;

    @media ${device.laptop} {
      gap: 2.5rem;
    }
  }

  h1 {
    max-width: 31.25rem;
    margin: auto;

    @media ${device.laptopL} {
      max-width: 45.625rem;
      margin-left: 0;
      text-align: left;
    }
  }

  svg {
    fill: ${({ theme }) => theme.colors.sanJuanBlue};
  }

  h5 {
    text-align: center;
    max-width: 27.813rem;
    margin:auto;

    @media ${device.laptop} {
      font-size: 1.5rem;
      letter-spacing:-0.011rem;
      line-height: 2rem;
      text-align: left;
      margin-left: 0.625rem;

    }
  }

  form {
    ${mixins.flex('center', 'center')}
    flex-direction: column;
    gap: 1.5rem;
    max-width: 27.813rem;
    margin: auto;
    position: relative;

    @media ${device.laptop} {
      margin: 0;
    }

    span {
      color: ${({ theme }) => theme.colors.error};
      align-self: flex-start;
      font-size: 0.688rem;
      letter-spacing: -0.005rem;
      position: absolute;
      top: 9.375rem;
      left: 1.25rem;
      opacity: 0;
      visibility: hidden;
      transition: ${({ theme }) => theme.transition};

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }

    input::placeholder {
      color: ${({ theme }) => theme.colors.sanJuanBlue};
      opacity: .5;
    }

    input[type=email] {
      &.active {
        border-color: ${({ theme }) => theme.colors.error};


        &::placeholder{
          color: ${({ theme }) => theme.colors.error};
        }
        
      }
    }

    button {
      font-size: 0.938rem;
      font-weight: 600;
      letter-spacing: -0.007rem;
      padding: 0.938rem 3.125rem;
      border-radius: 3.125rem;
      color: ${({ theme }) => theme.colors.sanJuanBlue};
      border: 0.063rem solid ${({ theme }) => theme.colors.sanJuanBlue};
      background: transparent;
      transition: ${({ theme }) => theme.transition};
      align-self: flex-start;
      

      &:focus,
      &:hover {
        background: ${({ theme }) => theme.colors.sanJuanBlue};
        color: ${({ theme }) => theme.colors.waterWhite};
      }
    }

    input,
    textarea {
      width: 100%;
      border: none;
      outline: none;
      border-bottom: 0.063rem solid rgba(54, 83, 107, 0.5);
      padding: 1.063rem 1.25rem;
      color: ${({ theme }) => theme.colors.sanJuanBlue};
      font-size: 0.938rem;
      font-weight: 500;
      line-height: 1.563rem;
      letter-spacing: -0.007rem;
      transition: ${({ theme }) => theme.transition};

      &:hover, &:focus {
        border-bottom: 0.063rem solid rgba(54, 83, 107, 1);
      }
    }

    & > div {
      ${mixins.flex('unset', 'center')}
      gap: 1.625rem;

      .checkbox {
        position: relative;
        width: 100%;
        max-width: 1.5rem;
        height: 1.5rem;

        label {
          display: block;
          width: 100%;
          height: 100%;
          background-color: rgba(151, 151, 151, 0.25);
          position: relative;
          transition: ${({ theme }) => theme.transition};
          cursor: pointer;

          &:hover {
            outline: 0.063rem solid black;
          }

          &::after {
            content: '';
            background-image: url(${checkmark});
            background-size: 65%;
            background-position: center center;
            background-repeat: no-repeat;
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            transition: ${({ theme }) => theme.transition};
          }
        }

        input {
          position: absolute;
          width: 0.063rem;
          height: 0.063rem;
          opacity: 0;
          pointer-events: none;

          &:checked + label {
            background-color: ${({ theme }) => theme.colors.darkPink};
          }

          &:checked + label::after {
            opacity: 1;
          }

          &:focus + label {
            outline: 0.063rem solid black;
          }
        }
      }

      p {
        color: ${({ theme }) => theme.colors.sanJuanBlue};
      }
    }
  }
`;

const Contact = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const inputRef = useRef(null);

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    return (false)
  }

  function onSubmit(e) {
    e.preventDefault();
    if (validateEmail(email)) {
      setError(false)
    } else {
      setError(true)
      inputRef.current.focus()
    }
  }



  return (
    <AnimatedComponent>
      <StyledSection>
        <Circle page="contact" />
        <div className='container'>
          <div className='contact-wrapper'>
            <h1 className='small'> Submit a help request and we'll get in touch shortly.</h1>

            <motion.div className='content-wrapper' variants={fadeFromLeft} initial="hide" whileInView="show" viewport={{ once: true }}>
              <form onSubmit={onSubmit}>
                <input type='text' placeholder='Name' />
                <input ref={inputRef} className={error ? "active" : ""} value={email} type='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                <span className={error ? "active" : ""}>This field can’t be empty</span>
                <input type='text' placeholder='Company Name' />
                <input type='text' placeholder='Title' />
                <textarea id='' rows='3' placeholder='Message'></textarea>

                <div>
                  <div className='checkbox'>
                    <input type='checkbox' id='check' />
                    <label htmlFor='check' />
                  </div>
                  <p>Stay up-to-date with company announcements and updates to our API</p>
                </div>

                <button>Submit</button>
              </form>

              <motion.div className='content' variants={fadeFromRight} initial="hide" whileInView="show" viewport={{ once: true }}>
                <h5>Join the thousands of innovators already building with us</h5>
                <Associates />
              </motion.div>
            </motion.div>

            <Start title='Ready to start?' />
          </div>
        </div>
      </StyledSection>
    </AnimatedComponent>
  );
};

export default Contact;
