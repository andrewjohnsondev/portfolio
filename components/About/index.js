import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import { config } from '../../styles/GlobalStyles';

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
    font-size: 1.25rem;
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
    gap: 2rem;
    font-size: 1rem;
    font-weight: var(--fw-600);
    max-width: 35rem;
    color: var(--color-primary-200);
    rotate: -5deg;
    margin-top: 6rem;
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
          <p>Coding has become one of my passions, and I enjoy learning new technologies in my free time. Here are some technologies I’ve been working this recently:</p>
          <ul className='technologies'>
            <li>Javascript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </StyledAboutSection>
  );
}
export default index;
