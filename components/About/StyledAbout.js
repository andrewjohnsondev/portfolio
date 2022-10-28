import styled from 'styled-components';
import { config } from '../../styles/GlobalStyles';

const StyledAboutSection = styled.section`
  .content-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .hi {
    position: absolute;
    left: 5rem;
    top: -1rem;
    opacity: 0.5;
    display: none;
    rotate: -45deg;
  }
  .content {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--color-neutral-200);
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 50ch;
    margin-inline: auto;
    position: relative;
    z-index: 1;

    span {
      color: var(--color-secondary-400);
    }
  }

  .technologies {
    margin: 0 auto 0 auto;
    padding: 1rem 1.5rem;
    list-style: none;
    background-color: var(--color-neutral-500);
    border-radius: var(--br);
    display: flex;
    justify-content: center;
    gap: 0.9375rem;
    font-size: 1rem;
    font-weight: var(--fw-600);
    max-width: 35rem;
    color: var(--color-primary-200);
    rotate: -3deg;
    margin-top: 4rem;
  }

  .motion-section-left {
    text-align: right;
  }
  .graph {
    position: absolute;
    left: 0;
    bottom: 8%;
  }
  .javascript {
    position: absolute;
    left: 70%;
    bottom: -25%;
  }
  .react {
    position: absolute;
    left: 20%;
    bottom: -25%;
  }
  .nextjs {
    position: absolute;
    right: 0;
    bottom: 10%;
  }

  .react,
  .nextjs {
    z-index: 1;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(-45deg, var(--color-primary-200) 0%, var(--color-primary-400) 100%);
      transform: translate3d(0, 0, 0) scale(0.85);
      filter: blur(40px);
      opacity: 0.15;
      z-index: -1;
    }
  }
  .graph,
  .javascript {
    z-index: 1;
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(-45deg, var(--color-primary-400) 0%, var(--color-secondary-400) 100%);
      transform: translate3d(0, 0, 0) scale(0.85);
      filter: blur(40px);
      opacity: 0.15;
      z-index: -1;
    }
  }

  @media (min-width: ${config.med}) {
    .hi {
      display: block;
    }

    .content {
      font-size: 1.5rem;
    }

    .technologies {
      font-size: 1.25rem;
      gap: 2rem;
      margin-top: 6rem;
      rotate: -5deg;
    }

    .nextjs {
      bottom: 10%;
    }

    .graph {
      bottom: 10%;
    }

    .react {
      bottom: -25%;
      left: 20%;
    }
  }
`;

export default StyledAboutSection;
