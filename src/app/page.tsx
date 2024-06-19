import * as Layout from "@/components/_ui/layout";
import { Hero, HeroMain } from "@/components/cta-landingpage";
import { Pricing } from "@/components/pricing";
import FAQ from "@/components/faq";
import Feature from "@/components/features";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

export default async function Home() {
  return (
    <Layout.Main>
      <NavBar />
      <HeroMain />
      <Feature />
      <Pricing />
      <FAQ />
      <Hero />
      <Footer />
    </Layout.Main>
  );
}
