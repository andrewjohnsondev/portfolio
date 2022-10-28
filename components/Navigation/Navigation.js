import styled from 'styled-components';
import NavLink from './NavLink';
import { config } from '../../styles/GlobalStyles';

const StyledNavigation = styled.ul`
  display: none;

  @media (min-width: ${config.med}) {
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
    list-style: none;
  }
`;

function Navigation() {
  return (
    <StyledNavigation>
      <li>
        <NavLink text='Projects' href='#projects' />
      </li>
      <li>
        <NavLink text='Contact' href='#contact' />
      </li>
      <li>
        <NavLink text='Github' href='https://github.com/andrewjohnsondev' src='github' alt='' target='_blank' />
      </li>
      <li>
        <NavLink text='LinkedIn' href='https://www.linkedin.com/in/andrew-johnson-a0b853229/' src='linkedin' alt='' target='_blank' />
      </li>
    </StyledNavigation>
  );
}
export default Navigation;
