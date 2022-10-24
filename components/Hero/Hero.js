import styled from 'styled-components';
import { config } from '../../styles/GlobalStyles';
import ButtonLink from '../ButtonLink';
import Image from 'next/image';
import scribbleImage from '../../public/assets/scribble.svg';
import chevronImage from '../../public/assets/chevron.svg';

const StyledHero = styled.section`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 5rem;
  color: var(--color-neutral-100);
  position: relative;
  z-index: 9;

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: var(--fw-900);
    rotate: -2deg;
    line-height: 1.2;

    span {
      color: var(--color-primary-400);
    }
  }

  .button {
    margin-top: 3rem;
  }

  @media (min-width: ${config.med}) {
    align-items: center;
    margin-top: 0;
    h1 {
      font-size: 4.5rem;
    }

    .button {
      margin-top: 5rem;
    }
  }
  @media (min-width: ${config.lg}) {
    h1 {
      font-size: 5.7rem;
      margin-left: 2rem;
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
          <span>WEB</span> DEVELOPER
        </h1>
        <Image src={scribbleImage} alt='' priority />
        <ButtonLink className='button' href='#projects'>
          <Image src={chevronImage} alt='' priority />
        </ButtonLink>
      </div>
    </StyledHero>
  );
}
export default Hero;
