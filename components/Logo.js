import styled from 'styled-components';
import { config } from '../styles/GlobalStyles';

const StyledLogo = styled.a`
  color: var(--color-neutral-100);
  font-weight: var(--fw-700);
  font-size: 1.5rem;
  text-decoration: none;
  @media (min-width: ${config.med}) {
    font-size: 2rem;
  }
`;

function Logo() {
  return (
    <StyledLogo className='greenHover' href='#'>
      ANDREW
    </StyledLogo>
  );
}
export default Logo;
