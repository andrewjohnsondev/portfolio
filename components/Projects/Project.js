import Image from 'next/image';
import StyledProject from './StyledProject';
import linkSvg from '../../public/assets/link.svg';
import githubSvg from '../../public/assets/github.svg';
import leftSvg from '../../public/assets/left.svg';
import rightSvg from '../../public/assets/right.svg';
import MotionUp from '../MotionUp';

function Project({ name, description, technologies, github, link, image, alt, isContentLeft }) {
  return (
    <MotionUp>
      <StyledProject isContentLeft={isContentLeft}>
        <div className='content'>
          <div className='content__inner'>
            <p className='content__inner-feature'>Featured Project</p>
            <h3 className='content__inner-name'>{name}</h3>
          </div>
          <p className='content__description'>{description}</p>
          <div className='content__technologies'>
            <div className='content__technologies-list'>
              {technologies.map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
            <div className='content__technologies-links'>
              <a target='_blank' href={github} rel='noreferrer'>
                <Image src={githubSvg} alt='github' />
              </a>
              <a target='_blank' href={link} rel='noreferrer'>
                <Image src={linkSvg} alt='project' />
              </a>
            </div>
          </div>
        </div>
        <div className='pointer'>
          <Image src={isContentLeft ? rightSvg : leftSvg} alt='' />
        </div>
        <a href={link} className='project' target='_blank' rel='noreferrer'>
          <span className='box-decoration bg-pattern-accent'></span>
          <Image src={image} layout='fill' objectFit='contain' alt={alt} />
        </a>
      </StyledProject>
    </MotionUp>
  );
}
export default Project;
