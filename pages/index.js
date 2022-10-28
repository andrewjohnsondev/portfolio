import HeaderImage from '../components/HeaderImage';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navigation/Navbar';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import styled from 'styled-components';
import Head from 'next/head';
const StyledHeader = styled.header`
  position: relative;
`;

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>Andrew Johnson || Front-End Developer</title>
      </Head>
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
