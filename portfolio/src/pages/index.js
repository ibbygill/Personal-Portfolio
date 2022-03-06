import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import HeroImg from "../components/HeroImg/HeroImg";
import Technologies from "../components/Technologies/Technologies";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <HeroImg />
      </Section>
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;