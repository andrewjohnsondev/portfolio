import Image from 'next/image';
import styled from 'styled-components';
import gas from '../public/assets/gas.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect } from 'react';

const StyledHeaderImage = styled.div`
  height: 100%;
  right: 0;
  top: 0;
  width: 50%;
  position: absolute;
  border-radius: var(--br);
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #ff9966; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff9966, #ff5e62); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #fe8d8c, #ff5f5d);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .image {
    width: 100%;
    opacity: 1;
    height: 100%;
    position: relative;
  }
`;

function HeaderImage() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 400], [1, 2]);

  useEffect(() => {
    return scrollY.onChange((latest) => {});
  });

  return (
    <StyledHeaderImage>
      <motion.div className='image' style={{ scale }}>
        <Image priority src={gas} layout='fill' objectFit='cover' alt='' />
      </motion.div>
    </StyledHeaderImage>
  );
}
export default HeaderImage;
