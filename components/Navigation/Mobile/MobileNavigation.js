import styled from 'styled-components';
import NavLink from '../NavLink';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const StyledMobileNavigation = styled.div`
  ul {
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
    transition: transform 300ms ease, opacity 300ms ease;
  }
`;

const variants = {
  open: { x: '0', opacity: '1' },
  closed: { x: '100%' },
};

function MobileNavigation({ isOpen, setIsOpen }) {
  const [andrew, setSet] = useState(null);
  useEffect(() => {
    setSet(true);
  }, []);
  return (
    <StyledMobileNavigation andrew={andrew} isOpen={isOpen}>
      <AnimatePresence>
        <motion.ul key='mobileNav' animate={isOpen ? 'open' : 'closed'} initial={{ display: 'flex', opacity: 0 }} variants={variants} exit={{ opacity: '1', display: 'none' }}>
          <li>
            <NavLink onClick={() => setIsOpen(false)} text='Projects' href='projects' />
          </li>
          <li>
            <NavLink onClick={() => setIsOpen(false)} text='Contact' href='contact' />
          </li>
          <li>
            <NavLink onClick={() => setIsOpen(false)} text='Github' href='https://github.com/andrewjohnsondev' src='/assets/github.svg' alt='' target='_blank' />
          </li>
          <li>
            <NavLink onClick={() => setIsOpen(false)} text='LinkedIn' href='https://www.linkedin.com/in/andrew-johnson-a0b853229/' src='/assets/linkedin.svg' alt='' target='_blank' />
          </li>
        </motion.ul>
      </AnimatePresence>
    </StyledMobileNavigation>
  );
}
export default MobileNavigation;
