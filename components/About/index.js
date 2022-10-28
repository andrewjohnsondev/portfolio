import SectionTitle from '../SectionTitle';
import StyledAboutSection from './StyledAbout';
import graphqlSvg from '../../public/assets/graphql.svg';
import javascriptSvg from '../../public/assets/javascript.svg';
import reactSvg from '../../public/assets/react.svg';
import nextjsSvg from '../../public/assets/nextjs.svg';
import Image from 'next/image';
import React from 'react';
import hiSvg from '../../public/assets/hi.svg';
import MotionUp from '../MotionUp';

function index() {
  return (
    <StyledAboutSection className='section'>
      <div className='wrapper content-wrapper'>
        <div className='hi'>
          <Image src={hiSvg} alt='' />
        </div>

        <MotionUp className='motion-section-left'>
          <SectionTitle isLeft>About Me</SectionTitle>
        </MotionUp>
        <MotionUp className='content'>
          <p>
            Hello! My name is <span>Andrew Johnson</span>, and I enjoy building applications for the web. I live in Nephi, Utah, and have a beautiful little family. Currently, I work at Angel Studios
            as a Release Manager.
          </p>
          <p>Coding has become one of my passions, and I enjoy learning new technologies in my free time. Here are some technologies I have been working with recently:</p>
          <ul className='technologies'>
            <li>Javascript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>GraphQL</li>
          </ul>
        </MotionUp>
        <div className='graph'>
          <Image src={graphqlSvg} alt='' />
        </div>
        <div className='javascript'>
          <Image src={javascriptSvg} alt='' />
        </div>
        <div className='react'>
          <Image src={reactSvg} alt='' />
        </div>
        <div className='nextjs'>
          <Image src={nextjsSvg} alt='' />
        </div>
      </div>
    </StyledAboutSection>
  );
}
export default index;
