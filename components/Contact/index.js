import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import Form from '../Form';
import { config } from '../../styles/GlobalStyles';
import sendSvg from '../../public/assets/send.svg';
import greenLinkedinSvg from '../../public/assets/greenLinkedin.svg';
import emailSvg from '../../public/assets/email.svg';
import Image from 'next/image';
import MotionUp from '../MotionUp';

const StyledContactSection = styled.section`
  position: relative;

  .contact__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    justify-content: center;

    &-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      gap: 1.5rem;
      position: relative;
      z-index: 999;

      .send {
        display: none;
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 1.25rem;
        font-weight: var(--fw-600);
        color: var(--color-neutral-100);
        gap: 1rem;
      }
    }
  }

  @media (min-width: ${config.med}) {
    .contact__inner {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      .send {
        display: block;
        position: absolute;
        left: 20%;
        top: 150%;
        width: 70%;
        opacity: 0.5;
      }
    }
  }

  @media (min-width: ${config.med}) {
    .send {
      width: 100%;
    }
  }
`;

function index() {
  return (
    <StyledContactSection id='contact' className='section'>
      <div className='wrapper'>
        <MotionUp>
          <SectionTitle>Contact</SectionTitle>
        </MotionUp>
        <MotionUp className='contact__inner'>
          <ul className='contact__inner-links'>
            <div className='send'>
              <Image src={sendSvg} alt='' />
            </div>
            <li className='greenHover'>
              <a href='mailto: andyjohndev@gmail.com'>
                <Image src={emailSvg} alt='email' />
                <span>andyjohndev@gmail.com</span>
              </a>
            </li>
            <li className='greenHover'>
              <a href='https://www.linkedin.com/in/andrew-johnson-a0b853229/' target='_blank' rel='noreferrer'>
                <Image src={greenLinkedinSvg} alt='linkedin' />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
          <Form />
        </MotionUp>
      </div>
    </StyledContactSection>
  );
}
export default index;
