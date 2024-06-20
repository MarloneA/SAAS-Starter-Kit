// Layout
import * as Layout from "@/components/_ui/layout";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Coins, ArrowRight } from "lucide-react";
import { H2, P } from "../_ui/typography";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Application Dashboard",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Subcription and Payments",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Custom Entities",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Auth, Accounts and Users",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Roles and Permissions",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Metrics",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Feature Flags",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
          necessarry for building a fully functional saas app
          <br />
          {" you're"} not ready to commit you can get started for free.
        </P>
      </Layout.Section>
      <Layout.Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Build your Saas</Balancer>
          </h3>
          <h4 className="opacity-70 font-light text-2xl">
            <Balancer>What to expect when building with Saas Kit</Balancer>
          </h4>

          <div className="gap-6 grid md:grid-cols-2 mt-6 md:mt-12">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 hover:-mt-2 hover:mb-2 p-6 border rounded-lg transition-all"
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
          <div>
            {singleFeatureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 bg-muted/25 hover:-mt-2 hover:mb-2 p-6 border rounded-lg transition-all"
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
