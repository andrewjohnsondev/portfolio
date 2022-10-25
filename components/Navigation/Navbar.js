import Logo from '../Logo';
import styled from 'styled-components';
import Hamburger from './Mobile/Hamburger';
import { useState, useEffect, useRef } from 'react';
import useMenuInit from '../../lib/hooks/useMenuInit';
import useEventListener from '../../lib/hooks/useEventListener';
import Navigation from './Navigation';
import MobileNavigation from './Mobile/MobileNavigation';

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
        <Navigation />
        <MobileNavigation isOpen={isOpen} />
        <Hamburger onClick={() => setIsOpen((state) => !state)} isOpen={isOpen} />
      </div>
    </StyledNavBar>
  );
}
export default Navbar;
