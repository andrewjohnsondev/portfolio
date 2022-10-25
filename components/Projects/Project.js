import Image from 'next/image';
import StyledProject from './StyledProject';
import linkSvg from '../../public/assets/link.svg';
import githubSvg from '../../public/assets/github.svg';
import leftSvg from '../../public/assets/left.svg';
import rightSvg from '../../public/assets/right.svg';

function Project({ name, description, technologies, github, link, image, alt, isContentLeft }) {
  return (
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
            <a href={github}>
              <Image src={githubSvg} alt='github' />
            </a>
            <a href={link}>
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
  );
}
export default Project;
