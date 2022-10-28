import styled from 'styled-components';
import { config } from '../../styles/GlobalStyles';
import ButtonLink from '../ButtonLink';
import Image from 'next/image';
import scribbleImage from '../../public/assets/scribble.svg';
import chevronImage from '../../public/assets/chevron.svg';
import projectSvg from '../../public/assets/projects.svg';

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: 5rem;
  color: var(--color-neutral-100);
  position: relative;
  z-index: 9;
  padding-top: 10vh;

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: clamp(3rem, 5.2vw + 1rem, 5.2rem);
    font-weight: var(--fw-900);
    rotate: -2deg;
    line-height: 1.2;
    margin-top: 3rem;

    span {
      color: var(--color-primary-400);
    }
  }

  .button {
    margin-top: 3rem;
    position: relative;
  }

  .projects {
    position: absolute;
    bottom: 10%;
    left: -200%;
  }

  @media (min-width: ${config.med}) {
    align-items: center;

    h1 {
      margin-top: 0;
    }

    .button {
      margin-top: 5rem;
    }
  }
`;

function Hero() {
  return (
    <StyledHero>
      <div className='wrapper hero'>
        <h1>
          HI,
          <br />
          I&apos;M ANDREW
          <br />
          <span>FRONT-END</span> DEVELOPER
        </h1>
        <Image src={scribbleImage} alt='' priority />

        <ButtonLink className='button' to='projects' spy={true} smooth={true} offset={50} duration={500}>
          <div className='projects'>
            <Image src={projectSvg} alt='' />
          </div>

          <Image data-animate src={chevronImage} alt='' priority />
        </ButtonLink>
      </div>
    </StyledHero>
  );
}
export default Hero;
