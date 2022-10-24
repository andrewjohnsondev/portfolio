import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import Project from './Project';
import { config } from '../../styles/GlobalStyles';

const StyledProjectSection = styled.section`
  position: relative;

  .inner {
    display: flex;
    flex-direction: column;
  }
  .project-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6rem;
  }

  @media (min-width: ${config.med}) {
    .project-layout {
      gap: 15rem;
    }
  }
`;

function index() {
  return (
    <StyledProjectSection id='projects' className='section'>
      <div className='wrapper inner'>
        <SectionTitle>My Projects</SectionTitle>
        <div className='project-layout'>
          <Project
            isContentLeft={true}
            className='image-shape-right'
            name='Nebo Brew'
            description='Full stack coffee E-commerce store built from scratch!'
            technologies={['NextJS', 'SanityCMS', 'GraphQL', 'Styled-Components', 'Stripe']}
            github='https://github.com/andrewjohnsondev/NeboBrew'
            link='https://localhost:3001'
            image='/assets/nebobrew.png'
            alt='Nebo Brew Project'
          />
          <Project
            isContentLeft={false}
            className='image-shape-left'
            name='RaceInUtah'
            description='A web app that lists upcoming race events happening in Utah.'
            technologies={['NextJS', 'Tailwind CSS', 'RunSignup API']}
            github='https://github.com/andrewjohnsondev/RaceInUtah'
            link='https://raceinutah.com'
            image='/assets/raceinutah.png'
            alt='Race In Utah Project'
          />
        </div>
      </div>
    </StyledProjectSection>
  );
}
export default index;
