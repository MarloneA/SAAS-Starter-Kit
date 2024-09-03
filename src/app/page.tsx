import * as Layout from "@/components/_ui/layout";
import { CallToAction } from "@/components/templates/callToAction";
import { Hero } from "@/components/templates/landingpage";
import { Pricing } from "@/components/templates/pricing";
import FAQ from "@/components/templates/faq";
import Feature from "@/components/templates/features";
import Footer from "@/components/templates/footer";
import NavBar from "@/components/templates/navbar";
import BlogPosts from "@/components/templates/blogposts";

export default async function Home() {
  return (
    <Layout.Main>
      <NavBar />
      <Hero />
      <Feature />
      <Pricing />
      <BlogPosts />
      <FAQ />
      <CallToAction />
      <Footer />
    </Layout.Main>
  );
}
