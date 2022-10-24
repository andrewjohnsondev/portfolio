import Image from 'next/image';
import styled from 'styled-components';

const StyledNavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: var(--fw-700);
  color: var(--color-neutral-100);
  text-decoration: none;
  text-transform: uppercase;
`;

function NavLink({ href, src, text, alt, target }) {
  if (!src) {
    return (
      <StyledNavLink target={target} href={href} className='greenHover'>
        {text}
      </StyledNavLink>
    );
  }

  return (
    <StyledNavLink target={target} href={href} className='greenHover'>
      <img src={src} alt={alt} width='26px' height='26px' />
      <span>{text}</span>
    </StyledNavLink>
  );
}
export default NavLink;
