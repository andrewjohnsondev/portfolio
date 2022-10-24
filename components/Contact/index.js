import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import Form from '../Form';
import { config } from '../../styles/GlobalStyles';

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
        <SectionTitle>Contact</SectionTitle>
        <div className='contact__inner'>
          <ul className='contact__inner-links'>
            <img className='send' src='/assets/send.svg' alt='' />
            <li className='greenHover'>
              <a href='mailto: andyjohndev@gmail.com'>
                <img src='/assets/email.svg' alt='email' />
                <span>andyjohndev@gmail.com</span>
              </a>
            </li>
            <li className='greenHover'>
              <a href='https://www.linkedin.com/in/andrew-johnson-a0b853229/' target='_blank' rel='noreferrer'>
                <img src='/assets/greenLinkedin.svg' alt='linkedin' />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
          <Form />
        </div>
      </div>
    </StyledContactSection>
  );
}
export default index;
