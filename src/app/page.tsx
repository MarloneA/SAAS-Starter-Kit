import * as Layout from "@/components/_ui/layout";
import { CallToAction } from "@/components/callToAction";
import { Hero } from "@/components/landingpage";
import { Pricing } from "@/components/pricing";
import FAQ from "@/components/faq";
import Feature from "@/components/features";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import BlogPosts from "@/components/blogposts";

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
