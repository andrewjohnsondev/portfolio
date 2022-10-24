import Image from 'next/image';
import styled from 'styled-components';
import colorSplash from '../public/assets/color-splash.jpg';

const StyledHeaderImage = styled.div`
  height: 100%;
  right: 0;
  top: 0;
  width: 50%;
  position: absolute;
  border-radius: var(--br);

  .image {
    width: 100%;
    height: 100%;
  }

  .overlay {
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

function HeaderImage() {
  return (
    <StyledHeaderImage>
      <Image className='image' src={colorSplash} priority alt='' layout='fill' objectPosition='center' objectFit='cover' />
      <div className='overlay'></div>
    </StyledHeaderImage>
  );
}
export default HeaderImage;
