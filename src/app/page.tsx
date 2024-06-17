import NavBar from "@/components/navbar";
import { Button } from "@/components/_ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/_ui/card";
import { pricingCards } from "@/constants/landing-page";
import clsx from "clsx";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, Small, P } from "@/components/_ui/typography";
import Feature from "@/components/features";
import Hero from "@/components/cta-landingpage";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { Badge } from "@/components/_ui/badge";

export default async function Home() {
  const techStack = [
    {
      link: "https://react.dev",
      src: "/icons/react-icon.png",
      name: "React",
    },
    {
      link: "https://react.dev",
      src: "/icons/typescript-icon.png",
      name: "Typescript",
    },
    {
      link: "https://prisma.io",
      src: "/icons/prisma-icon.png",
      name: "Prisma",
    },
    {
      link: "https://nextjs.org",
      src: "/icons/next-js.svg",
      name: "Next",
    },
    {
      link: "https://tailwindcss.com",
      src: "/icons/tailwind-icon.png",
      name: "Tailwind",
    },
    {
      link: "https://tailwindcss.com",
      src: "/icons/stripe-icon.png",
      name: "Stripe",
    },
    {
      link: "https://postmarkapp.com",
      src: "/icons/postmark-icon.png",
      name: "Postmark",
    },
  ];

  const colorVariants = {
    orange: "group-hover:bg-orange-500",
    green: "group-hover:bg-emerald-500",
    blue: "group-hover:bg-cyan-500",
    yellow: "group-hover:bg-yellow-500",
    indigo: "group-hover:bg-indigo-500",
    purple: "group-hover:bg-purple-500",
  };

  return (
    <main className="">
      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-8 ">
          <Badge className="not-prose w-fit" variant="outline">
            <Link
              className="group flex items-center gap-1"
              href="https://ui.shadcn.com"
              target="_blank"
            >
              powered by shadcn ui
              <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
            </Link>
          </Badge>
          <H1 className="text-center font-display inline-flex flex-col gap-1 bg-gradient-to-r from-20% bg-clip-text pb-1 text-4xl font-black leading-none text-transparent transition sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl dark:from-slate-300 dark:to-slate-200 from-black to-slate-600 from-black to-slate-600">
            <div className="hidden md:block">
              <span> Next js SaaS</span>
              <div>
                <div>Development Framework</div>
              </div>
              <div className="flex flex-col items-center justify-center overflow-hidden group">
                <div className="relative h-5 w-full">
                  <div className="absolute inset-x-0 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent to-transparent blur-sm via-sky-500"></div>
                  <div className="absolute inset-x-1/4 top-0 h-px w-3/4 bg-gradient-to-r from-transparent to-transparent via-sky-500"></div>
                  <div className="absolute inset-x-1/4 top-0 h-[5px] w-2/4 bg-gradient-to-r from-transparent to-transparent blur-sm via-sky-400"></div>
                  <div className="absolute inset-x-1/4 top-0 h-px w-1/4 bg-gradient-to-r from-transparent to-transparent via-sky-400"></div>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <span>Next js SaaS Development Framework</span>
              <div className="flex flex-col items-center justify-center overflow-hidden">
                <div className="relative h-5 w-full">
                  <div className="absolute inset-x-0 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent to-transparent blur-sm via-sky-500"></div>
                  <div className="absolute inset-x-1/4 top-0 h-px w-3/4 bg-gradient-to-r from-transparent to-transparent via-sky-500"></div>
                  <div className="absolute inset-x-1/4 top-0 h-[5px] w-2/4 bg-gradient-to-r from-transparent to-transparent blur-sm via-sky-400"></div>
                  <div className="absolute inset-x-1/4 top-0 h-px w-1/4 bg-gradient-to-r from-transparent to-transparent via-sky-400"></div>
                </div>
              </div>
            </div>
          </H1>
          <P>
            A fullstack Nextjs, typescript, shadcn starter kit to {"launch"}
            <br /> any production level saas application with a collection of
            common saas strategies and platform to suit your needs
          </P>
          <Link
            href="/dashboard"
            className="font-bold text-black p-4 rounded-md hover:text-black bg-white"
          >
            Get Started For Free
          </Link>
          <div className="group flex w-full items-center justify-center">
            <div
              className={`absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] bg-sky-500`}
            ></div>
            {techStack.map((stack, index) => {
              const { link, src, name } = stack;
              return (
                <div
                  key={index}
                  className=" m-2 w-40 flex cursor-default flex-col items-center justify-center rounded-lg bg-slate-900/5 p-2 align-middle backdrop-blur transition hover:scale-[1.02] hover:bg-slate-900/10 sm:p-4 md:p-6 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <a rel="noreferrer" href={link} target="_blank">
                    <div>
                      <div>
                        <img
                          className="h-10 object-cover md:h-12"
                          src={src}
                          alt={name}
                        />
                        <div className="text-muted-foreground mx-auto hidden justify-center truncate text-center text-xs font-medium opacity-50 sm:flex">
                          {name}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          <Image
            src="/images/landing.png"
            width={1200}
            height={100}
            alt="Logo"
            className=" object-contain border-black border-4 m-10 rounded-lg"
          />
        </div>
      </section>
      <section
        id="about"
        className="flex justify-center items-center flex-col gap-4 mt-10"
      >
        <H2>Features</H2>
        <P>
          This fully built starter kit comes packed with features that are
          necessarry for building a fully functional saas app
          <br />
          {" you're"} not ready to commit you can get started for free.
        </P>
      </section>
      <Feature />

      <section
        id="pricing"
        className="flex justify-center items-center flex-col gap-4 mt-10"
      >
        <H2>Choose your plan</H2>
        <P>
          Our straightforward pricing plans are tailored to meet your needs. If
          <br />
          {" you're"} not ready to commit you can get started for free.
        </P>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx("w-[300px] flex flex-col justify-between", {
              "border-2 border-primary": card.title === "Unlimited",
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2">
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-black border-orange border-2 p-2 w-full text-white text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <section
        id="faq"
        className="flex justify-center items-center flex-col gap-4 mt-10"
      >
        <H2>Have any Questions?</H2>
        <P>
          Our straightforward pricing plans are tailored to meet your needs. If
          <br />
          {" you're"} not ready to commit you can get started for free.
        </P>
      </section>
      <FAQ />
      <Hero />
      <Footer />
    </main>
  );
}
