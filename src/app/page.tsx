import * as Layout from "@/components/_ui/layout";
import { CTASection } from "@/components/templates/ctasection";
import { Hero } from "@/components/templates/hero";
import { Pricing } from "@/components/templates/pricing";
import FAQ from "@/components/templates/faq";
import Feature from "@/components/templates/features";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import BlogPosts from "@/components/templates/blogposts";

export default async function Home() {
  return (
    <Layout.Main>
      <Header />
      <Hero />
      <Feature />
      <Pricing />
      <BlogPosts />
      <FAQ />
      <CTASection />
      <Footer />
    </Layout.Main>
  );
}
