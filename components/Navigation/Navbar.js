import Logo from '../Logo';
import NavLink from './NavLink';
import styled from 'styled-components';
import { config } from '../../styles/GlobalStyles';
import Hamburger from './Mobile/Hamburger';
import { useState, useEffect, useRef } from 'react';
import useMenuInit from '../../lib/hooks/useMenuInit';
import useEventListener from '../../lib/hooks/useEventListener';

const StyledNavBar = styled.nav`
  min-height: 10vh;
  background-color: transparent;
  padding-block: 1.5rem;
  position: relative;
  z-index: 9999;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .primary {
    display: none;
    flex-direction: column;
    background-color: var(--color-neutral-500);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 80%;
    z-index: 999999;
    gap: 4rem;
    list-style: none;
    padding: 7rem 0 0 3.5rem;
    margin: 0;
    transition: transform 350ms ease;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  }

  .flex {
    display: flex;
  }

  @media (min-width: ${config.med}) {
    .primary {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      position: static;
      margin: 0;
      margin-left: auto;
      background-color: transparent;
      gap: 2rem;
      justify-content: flex-end;
      align-items: center;
      list-style: none;
      padding: 0;
      transform: translateX(0);
    }
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [initMenu] = useMenuInit();
  const navRef = useRef();
  const handleLinkClick = (e) => {
    if (e.target.dataset.link) {
      setIsOpen(false);
    }
  };
  useEventListener('click', handleLinkClick, navRef.current);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('stopScroll');
    } else {
      document.body.classList.remove('stopScroll');
    }
  }, [isOpen]);

  return (
    <StyledNavBar ref={navRef} isOpen={isOpen} aria-label='primary' className={`bg-white`}>
      <div className='wrapper nav'>
        <Logo />
        <ul className={`${initMenu ? 'flex' : null} primary`}>
          <li>
            <NavLink text='Github' href='https://github.com/andrewjohnsondev' src='/assets/github.svg' alt='' target='_blank' />
          </li>
          <li>
            <NavLink text='LinkedIn' href='https://www.linkedin.com/in/andrew-johnson-a0b853229/' src='/assets/linkedin.svg' alt='' target='_blank' />
          </li>
          <li>
            <NavLink text='Projects' href='#projects' />
          </li>
          <li>
            <NavLink text='Contact' href='#contact' />
          </li>
        </ul>
        <Hamburger onClick={() => setIsOpen((state) => !state)} isOpen={isOpen} />
      </div>
    </StyledNavBar>
  );
}
export default Navbar;
