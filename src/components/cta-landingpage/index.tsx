import { Section, Container } from "@/components/_ui/layout";
import { ArrowRight } from "lucide-react";
import { Button } from "../_ui/button";
import { Badge } from "../_ui/badge";

import Link from "next/link";
import { H1, P } from "../_ui/typography";
import Image from "next/image";
import { techStack } from "@/constants/landing-page";

export const Hero = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link className="group flex items-center gap-1" href="/#pricing">
            Lorem ipsum dolor sit amet
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">
          Building a saas should be about the product not the other stuff.
          that's where we come in?
        </h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>

        <div className="flex gap-4">
          <Button>Get Started for free</Button>
          <Button variant="outline">Checkout the code</Button>
        </div>
      </Container>
    </Section>
  );
};

export const HeroMain = () => {
  return (
    <Section>
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
          className="font-bold text-black p-4 rounded-md hover:text-black bg-[#16597e]"
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
    </Section>
  );
};
