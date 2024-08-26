import * as Layout from "@/components/_ui/layout";
import { Coins, ArrowRight } from "lucide-react";

import { Button } from "../_ui/button";
import { H2, P } from "../_ui/typography";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../_ui/card";
import Image from "next/image";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  img?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Application Dashboard",
    href: "/",
    description:
      "Stay on top of your operations with our intuitive Application Dashboard. Monitor real-time data, track progress, and gain valuable insights all in one place.",
    cta: "Learn More",
    img: "/images/landing.png",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Subcription and Payments",
    href: "/",
    description:
      "Simplify your billing processes with our Subscription and Payments feature. Manage subscriptions, track payments, and ensure seamless transactions for your customers.",
    cta: "Learn More",
    img: "/images/features/pricing.png",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Custom Entities",
    href: "/",
    description:
      "Tailor your data management with Custom Entities. Create, organize, and customize entities to match your unique business needs, ensuring maximum flexibility.",
    cta: "Learn More",
    img: "/images/features/documentation.png",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Auth, Accounts and Users",
    href: "/",
    description:
      "Secure and manage your user base effortlessly with our comprehensive Auth, Accounts, and Users feature. Handle authentication, user accounts, and permissions with ease.",
    cta: "Learn More",
    img: "/images/features/settings.png",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Roles and Permissions",
    href: "/",
    description:
      "Control access with precision using Roles and Permissions. Define roles, assign permissions, and ensure the right people have access to the right resources.",
    cta: "Learn More",
    img: "/images/features/documentation.png",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Email Marketing",
    href: "/",
    description:
      "Boost your outreach with our powerful Email Marketing tool. Create targeted campaigns, track performance, and engage your audience effectively.",
    cta: "Learn More",
    img: "/images/features/mail.png",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Custom Blog Section",
    href: "/",
    description:
      "Boost your outreach with custom blog tools that enable you to create, manage and publish blogs. Create targeted articles that speak of your product, and effectively communicate with your audience about you product.",
    cta: "Learn More",
    img: "/images/features/blog.png",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Documentation",
    href: "/",
    description:
      "Provide Documentation and Guides on how to use your product effectively, this is fully managed and made available using open source tools.",
    cta: "Learn More",
    img: "/images/features/documentation.png",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Feature Flags",
    href: "/",
    description:
      "manage how you roll out features to your clients and customers with custom rules and filters",
    cta: "Learn More",
  },
];

const Feature = () => {
  return (
    <Layout.Section>
      <Layout.Section
        id="about"
        className="flex flex-col justify-center items-center gap-4 mt-10"
      >
        <H2>Features</H2>
        <P>
          This fully built starter kit comes packed with features that are
          necessarry for building a fully functional application.
          <br />
          if {" you're"} not ready to commit you can get started for free.
        </P>
        <Button>
          <Link href="#pricing">Try out Saas Kit for free</Link>
        </Button>
      </Layout.Section>
      <Layout.Container className="not-prose max-w-7xl">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Build your Saas</Balancer>
          </h3>
          <h4 className="opacity-70 font-light text-2xl">
            <Balancer>What to expect when building with Saas Kit</Balancer>
          </h4>

          <div className="gap-6 grid md:grid-cols-2 mt-6 md:mt-12">
            {featureText.map(
              ({ icon, title, description, href, cta, img }, index) => (
                <Link
                  href={`${href}`}
                  className={`flex flex-col justify-between gap-6 hover:-mt-2 hover:mb-2 p-6 border rounded-lg transition-all  ${
                    index % 2 === 0 ? "bg-[#0a1433]" : "bg-[#0a1433]"
                  }`}
                  key={index}
                >
                  <Card>
                    <div className="gap-4 grid">
                      {/* {icon} */}
                      <CardHeader className="text-primary text-xl">
                        {title}
                      </CardHeader>
                      <CardContent>
                        <Image src={img} width={804} height={452} alt="title" />
                      </CardContent>
                      <CardContent className="opacity-75 text-base">
                        {description}
                      </CardContent>
                    </div>
                    {cta && (
                      <CardFooter className="flex items-center h-fit font-semibold text-sm">
                        <p>{cta}</p> <ArrowRight className="ml-2 w-4 h-4" />
                      </CardFooter>
                    )}
                  </Card>
                </Link>
              )
            )}
          </div>
          <div>
            {singleFeatureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 bg-muted/25 hover:-mt-2 hover:mb-2 p-6 border rounded-lg transition-all bg-[#0a1433]"
                  key={index}
                >
                  <div className="gap-4 grid">
                    {icon}
                    <h4 className="text-primary text-xl">{title}</h4>
                    <p className="opacity-75 text-base">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex items-center h-fit font-semibold text-sm">
                      <p>{cta}</p> <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </Layout.Container>
    </Layout.Section>
  );
};

export default Feature;
