import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import { config } from '../../styles/GlobalStyles';
import graphqlSvg from '../../public/assets/graphql.svg';
import javascriptSvg from '../../public/assets/javascript.svg';
import reactSvg from '../../public/assets/react.svg';
import nextjsSvg from '../../public/assets/nextjs.svg';
import Image from 'next/image';
import React from 'react';

const StyledAboutSection = styled.section`
  .content-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .hi {
    position: absolute;
    left: 5rem;
    top: -1rem;
    opacity: 0.5;
    display: none;
    rotate: -45deg;
  }
  .content {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--color-neutral-200);
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 50ch;
    margin-inline: auto;
    position: relative;
    z-index: 1;

    span {
      color: var(--color-secondary-400);
    }
  }

  .technologies {
    margin: 0 auto 0 auto;
    padding: 1rem 1.5rem;
    list-style: none;
    background-color: var(--color-neutral-500);
    border-radius: var(--br);
    display: flex;
    justify-content: center;
    gap: 0.9375rem;
    font-size: 1rem;
    font-weight: var(--fw-600);
    max-width: 35rem;
    color: var(--color-primary-200);
    rotate: -3deg;
    margin-top: 4rem;
  }

  .graph {
    position: absolute;
    left: 0;
    bottom: 8%;
  }
  .javascript {
    position: absolute;
    left: 70%;
    bottom: -30%;
  }
  .react {
    position: absolute;
    left: 20%;
    bottom: -30%;
  }
  .nextjs {
    position: absolute;
    right: 0;
    bottom: 10%;
  }

  @media (min-width: ${config.med}) {
    .hi {
      display: block;
    }

    .content {
      font-size: 1.5rem;
    }

    .technologies {
      font-size: 1.25rem;
      gap: 2rem;
      margin-top: 6rem;
      rotate: -5deg;
    }

    .nextjs {
      bottom: 0;
    }

    .graph {
      bottom: 0;
    }

    .react {
      bottom: -35%;
      left: 30%;
    }
  }
`;

function index() {
  return (
    <StyledAboutSection className='section'>
      <div className='wrapper content-wrapper'>
        <img className='hi' src='/assets/hi.svg' alt='' />
        <SectionTitle isLeft>About Me</SectionTitle>
        <div className='content'>
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
        </div>
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
