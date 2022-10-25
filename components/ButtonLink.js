import styled from 'styled-components';

const ButtonLink = styled.a`
  background-color: white;
  border-radius: 100%;
  aspect-ratio: 1;
  cursor: pointer;
  border: none;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-weight: var(--fw-700);
  font-size: 1.25rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 200ms ease;

  img[data-animate] {
    animation: upDown 450ms ease-in-out infinite alternate;
  }

  &:hover {
    background-color: var(--color-secondary-400);
  }

  @keyframes upDown {
    from {
      transform: translateY(-3px);
    }
    to {
      transform: translateY(3px);
    }
  }
`;

export default ButtonLink;
