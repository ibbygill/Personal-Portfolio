import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";
import HeroImg from "../components/HeroImg/HeroImg";
import Technologies from "../components/Technologies/Technologies";


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <HeroImg />
      </Section>
      <Technologies />
    </Layout>
  );
};

export default Home;