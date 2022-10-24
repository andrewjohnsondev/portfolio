import Image from 'next/image';
import StyledProject from './StyledProject';

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
              <img src='/assets/github.svg' alt='github' />
            </a>
            <a href={link}>
              <img src='/assets/link.svg' alt='project' />
            </a>
          </div>
        </div>
      </div>
      <img className='pointer' src={isContentLeft ? 'assets/right.svg' : 'assets/left.svg'} alt='' />
      <a href='link' className='project'>
        <Image src={image} layout='fill' objectFit='cover' objectPosition='center top' alt='' />
      </a>
    </StyledProject>
  );
}
export default Project;
