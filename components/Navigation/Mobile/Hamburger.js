import styled from 'styled-components';
import { config } from '../../../styles/GlobalStyles';

const StyledHamburger = styled.button`
  border: none;
  background-color: transparent;
  width: 2.5rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  position: relative;
  z-index: 999999;

  .hamburger-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .line {
    display: block;
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
  }

  .line1 {
    transition: transform 0.4s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translate(5px, 5px)' : null)};
  }

  .line2 {
    transition: transform 0.2s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'scaleY(0)' : null)};
  }

  .line3 {
    transition: transform 0.4s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translate(7px, -6px)' : null)};
  }

  @media (min-width: ${config.med}) {
    display: none;
  }
`;

function Hamburger({ isOpen, onClick }) {
  return (
    <StyledHamburger onClick={onClick} isOpen={isOpen}>
      <div className='hamburger-wrapper'>
        <span className='line line1'></span>
        <span className='line line2'></span>
        <span className='line line3'></span>
      </div>
    </StyledHamburger>
  );
}
export default Hamburger;
