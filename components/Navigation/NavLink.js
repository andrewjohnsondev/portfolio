import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledNavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: var(--fw-700);
  color: var(--color-neutral-100);
  text-decoration: none;
  text-transform: uppercase;

  path {
    transition: fill 200ms ease-in-out;
  }

  &:hover {
    path {
      fill: var(--color-secondary-400);
    }
  }
`;

const StyledScrollLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: var(--fw-700);
  color: var(--color-neutral-100);
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;

function NavLink({ href, src, text, target, onClick }) {
  if (!src) {
    return (
      <StyledScrollLink onClick={onClick} className='greenHover' to={href} spy={true} smooth={true} offset={50} duration={500}>
        {text}
      </StyledScrollLink>
    );
  }

  return (
    <StyledNavLink onClick={onClick} data-link target={target} href={href} className='greenHover'>
      {src === 'github' && (
        <svg width='30' height='30' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clipPath='url(#clip0_15_761)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18 0C8.055 0 0 8.055 0 18C0 25.965 5.1525 32.6925 12.3075 35.0775C13.2075 35.235 13.545 34.695 13.545 34.2225C13.545 33.795 13.5225 32.3775 13.5225 30.87C9 31.7025 7.83 29.7675 7.47 28.755C7.2675 28.2375 6.39 26.64 5.625 26.2125C4.995 25.875 4.095 25.0425 5.6025 25.02C7.02 24.9975 8.0325 26.325 8.37 26.865C9.99 29.5875 12.5775 28.8225 13.6125 28.35C13.77 27.18 14.2425 26.3925 14.76 25.9425C10.755 25.4925 6.57 23.94 6.57 17.055C6.57 15.0975 7.2675 13.4775 8.415 12.2175C8.235 11.7675 7.605 9.9225 8.595 7.4475C8.595 7.4475 10.1025 6.975 13.545 9.2925C14.985 8.8875 16.515 8.685 18.045 8.685C19.575 8.685 21.105 8.8875 22.545 9.2925C25.9875 6.9525 27.495 7.4475 27.495 7.4475C28.485 9.9225 27.855 11.7675 27.675 12.2175C28.8225 13.4775 29.52 15.075 29.52 17.055C29.52 23.9625 25.3125 25.4925 21.3075 25.9425C21.96 26.505 22.5225 27.585 22.5225 29.2725C22.5225 31.68 22.5 33.615 22.5 34.2225C22.5 34.695 22.8375 35.2575 23.7375 35.0775C27.3108 33.8711 30.4158 31.5745 32.6155 28.511C34.8152 25.4476 35.9989 21.7714 36 18C36 8.055 27.945 0 18 0Z'
              fill='#fff'
            />
          </g>
          <defs>
            <clipPath id='clip0_15_761'>
              <rect width='36' height='36' fill='white' />
            </clipPath>
          </defs>
        </svg>
      )}

      {src === 'linkedin' && (
        <svg width='30' height='30' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M1.5 4.257C1.5 3.5258 1.79047 2.82455 2.30751 2.30751C2.82454 1.79047 3.5258 1.5 4.257 1.5H31.74C32.1024 1.49941 32.4613 1.5703 32.7962 1.7086C33.1311 1.84691 33.4355 2.04992 33.6919 2.30601C33.9482 2.5621 34.1516 2.86624 34.2903 3.20102C34.4289 3.5358 34.5002 3.89464 34.5 4.257V31.74C34.5004 32.1024 34.4293 32.4614 34.2909 32.7963C34.1524 33.1313 33.9492 33.4356 33.693 33.692C33.4368 33.9483 33.1326 34.1516 32.7977 34.2903C32.4628 34.4289 32.1039 34.5002 31.7415 34.5H4.257C3.89482 34.5 3.53619 34.4286 3.2016 34.29C2.867 34.1513 2.56301 33.9481 2.30698 33.692C2.05095 33.4358 1.8479 33.1317 1.70943 32.797C1.57097 32.4624 1.4998 32.1037 1.5 31.7415V4.257ZM14.562 14.082H19.0305V16.326C19.6755 15.036 21.3255 13.875 23.805 13.875C28.5585 13.875 29.685 16.4445 29.685 21.159V29.892H24.8745V22.233C24.8745 19.548 24.2295 18.033 22.5915 18.033C20.319 18.033 19.374 19.6665 19.374 22.233V29.892H14.562V14.082ZM6.312 29.6865H11.124V13.875H6.312V29.685V29.6865ZM11.8125 8.718C11.8216 9.13001 11.7483 9.53968 11.5969 9.92298C11.4455 10.3063 11.219 10.6555 10.9308 10.9501C10.6427 11.2446 10.2985 11.4787 9.91868 11.6385C9.53882 11.7983 9.13086 11.8806 8.71875 11.8806C8.30664 11.8806 7.89868 11.7983 7.51882 11.6385C7.13895 11.4787 6.79483 11.2446 6.50665 10.9501C6.21847 10.6555 5.99204 10.3063 5.84064 9.92298C5.68924 9.53968 5.61593 9.13001 5.625 8.718C5.64281 7.90929 5.97658 7.13969 6.55483 6.57403C7.13308 6.00838 7.90984 5.69163 8.71875 5.69163C9.52766 5.69163 10.3044 6.00838 10.8827 6.57403C11.4609 7.13969 11.7947 7.90929 11.8125 8.718V8.718Z'
            fill='#fff'
          />
        </svg>
      )}
      <span>{text}</span>
    </StyledNavLink>
  );
}
export default NavLink;
