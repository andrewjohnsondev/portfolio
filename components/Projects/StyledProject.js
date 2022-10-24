import styled from 'styled-components';
import { config } from '../../styles/GlobalStyles';
const StyledProject = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 2rem;

  .pointer {
    display: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: ${({ isContentLeft }) => (isContentLeft ? 'left' : 'right')};

    &__inner {
      &-feature {
        color: var(--color-accent-400);
        font-size: 0.875rem;
        font-weight: var(--fw-600);
        text-transform: uppercase;
      }

      &-name {
        font-size: 2rem;
        text-transform: uppercase;
        line-height: 1.3;
      }
    }

    &__description {
      font-size: 1.4rem;
      color: var(--color-neutral-200);
    }

    &__technologies {
      background-color: var(--color-neutral-500);
      border-radius: var(--br);
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      gap: 1.5rem;

      &-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        row-gap: 0.5rem;
        column-gap: 1rem;
        color: var(--color-secondary-400);
        font-weight: var(--fw-700);
        font-size: 0.75rem;
        justify-content: ${({ isContentLeft }) => (isContentLeft ? 'null' : 'flex-end')};
      }
      &-links {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: ${({ isContentLeft }) => (isContentLeft ? 'null' : 'flex-end')};

        a {
          &:hover img {
            filter: brightness(0.9) sepia(1) hue-rotate(270deg) saturate(40);
          }
        }
        img {
          width: 1.75rem;
          transition: filter 150ms linear;
        }
      }
    }
  }

  .project {
    border-radius: 100%;
    height: 100%;
    position: relative;
    border-radius: var(--br);
    cursor: pointer;
    z-index: 1;

    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(-45deg, var(--color-accent-400) 0%, var(--color-primary-400) 100%);
      transform: translate3d(0, 0, 0) scale(0.95);
      filter: blur(40px);
      opacity: 0.5;
      transition: background 200s ease-in-out;
      border-radius: inherit;
    }

    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      border-radius: inherit;
    }

    &:hover::before {
      background: linear-gradient(-45deg, var(--color-neutral-100) 0%, var(--color-primary-400) 100%);
    }

    img {
      border-radius: var(--br);
    }
  }

  @media (min-width: ${config.med}) {
    grid-template-columns: 1fr 1fr;
    position: relative;
    gap: 5rem;

    .pointer {
      display: block;
      position: absolute;
      top: -50%;
      left: ${({ isContentLeft }) => (isContentLeft ? '30%' : null)};
      right: ${({ isContentLeft }) => (isContentLeft ? null : '30%')};
      rotate: ${({ isContentLeft }) => (isContentLeft ? '3deg' : '-3deg')};
    }
    & > *:last-child {
      grid-column: ${({ isContentLeft }) => (isContentLeft ? 0 : 1)};
      grid-row: ${({ isContentLeft }) => (isContentLeft ? 0 : 1)};

      img {
        z-index: 1;
      }

      .box-decoration {
        position: absolute;
        width: 50%;
        height: 70%;
        border-radius: var(--br);
        border: solid 5px var(--color-neutral-500);
        top: -2rem;
        left: ${({ isContentLeft }) => (isContentLeft ? null : '-2rem')};
        right: ${({ isContentLeft }) => (isContentLeft ? '-2rem' : null)};
      }
    }

    .content__technologies {
      gap: 1.5rem;
      &-list {
        row-gap: 0.5rem;
      }
    }

    .project {
      position: relative;
    }
  }

  @media (min-width: ${config.lg}) {
    .content__technologies {
      &-list {
        font-size: 0.9375rem;
      }
    }
  }
`;

export default StyledProject;
