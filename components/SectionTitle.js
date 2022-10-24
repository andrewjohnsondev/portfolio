import styled from 'styled-components';
import { config } from '../styles/GlobalStyles';

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  rotate: ${({ isLeft }) => (isLeft ? '2deg' : '-2deg')};
  margin-left: ${({ isLeft }) => (isLeft ? 'auto' : null)};
  color: var(--color-neutral-100);
  position: relative;
  text-transform: uppercase;
  font-weight: var(--fw-900);
  display: inline-block;
  width: max-content;
  margin-bottom: 6rem;

  &::after {
    content: '';
    width: 100%;
    height: 50%;
    background-color: var(--color-primary-700);
    opacity: 0.8;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    z-index: -1;
  }

  @media (min-width: ${config.med}) {
    font-size: 3rem;
    margin-bottom: 8rem;
  }
`;

export default SectionTitle;
