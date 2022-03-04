import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <Layout>
      <Section grid>
      <Hero />
      
      </Section>
    </Layout>
  );
};

export default Home;