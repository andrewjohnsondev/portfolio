import HeaderImage from '../components/HeaderImage';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navigation/Navbar';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import styled from 'styled-components';
const StyledHeader = styled.header`
  position: relative;
`;

export default function Home() {
  return (
    <>
      <StyledHeader>
        <Navbar />
        <Hero />
        <HeaderImage />
      </StyledHeader>
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
