import Logo from '../Logo';
import styled from 'styled-components';
import Hamburger from './Mobile/Hamburger';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import useEventListener from '../../lib/hooks/useEventListener';
import Navigation from './Navigation';
import MobileNavigation from './Mobile/MobileNavigation';

const StyledNavBar = styled.nav`
  min-height: 10vh;
  background-color: ${({ bg }) => (bg ? 'rgba(36, 35, 35, 0.7)' : 'transparent')};
  box-shadow: ${({ bg }) => (bg ? 'rgba(29, 28, 28, 0.9) 0px 2px 14px' : 'none')};
  padding-block: 1.5rem;
  z-index: 99;
  transition: background-color 200ms ease;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [bg, setBg] = useState(false);
  const navRef = useRef();
  const { scrollY } = useScroll();

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

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    console.log(scrollY);
    return scrollY.onChange((latest) => {
      latest < 200 ? setBg(false) : setBg(true);
      console.log(bg);
      update();
    });
  });

  const variants = {
    visible: { opacity: 1, y: 0 },

    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.div className='fixed' variants={variants} animate={hidden ? 'hidden' : 'visible'} transition={{ duration: 0.3 }}>
      <StyledNavBar bg={bg} ref={navRef} isOpen={isOpen} aria-label='primary' className={`bg-white`}>
        <div className='wrapper nav'>
          <Logo />
          <Navigation />
          <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
          <Hamburger onClick={() => setIsOpen((state) => !state)} isOpen={isOpen} />
        </div>
      </StyledNavBar>
    </motion.div>
  );
}
export default Navbar;
