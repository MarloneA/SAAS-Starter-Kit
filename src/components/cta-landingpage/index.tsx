import { ArrowRight } from "lucide-react";
import { Badge } from "../_ui/badge";
import { Button } from "../_ui/button";
import { H1, P } from "../_ui/typography";
import { Section, Container } from "@/components/_ui/layout";
import { techStack } from "@/constants/landing-page";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="w-fit not-prose" variant="outline">
          <Link className="flex items-center gap-1 group" href="/#pricing">
            Lorem ipsum dolor sit amet
            <ArrowRight className="group-hover:-rotate-45 w-4 transition-all" />
          </Link>
        </Badge>
        <h1 className="!mb-0">
          Building a saas should be about the product not the other stuff.
          that's where we come in?
        </h1>
        <h3 className="bg-muted/50 p-4 border rounded-md text-muted-foreground">
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
      <div className="flex flex-col justify-center items-center gap-8 mt-[80px]">
        <Badge className="w-fit not-prose" variant="outline">
          <Link
            className="flex items-center gap-1 group"
            href="https://ui.shadcn.com"
            target="_blank"
          >
            powered by shadcn ui
            <ArrowRight className="group-hover:-rotate-45 w-4 transition-all" />
          </Link>
        </Badge>
        <H1 className="inline-flex flex-col gap-1 bg-clip-text bg-gradient-to-r from-20% from-black from-black dark:from-slate-300 to-slate-600 to-slate-600 dark:to-slate-200 pb-1 font-black font-display text-4xl text-center text-transparent sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl leading-none transition">
          <div className="md:block hidden">
            <span> Next js SaaS</span>
            <div>
              <div>Development Framework</div>
            </div>
            <div className="flex flex-col justify-center items-center overflow-hidden group">
              <div className="relative w-full h-5">
                <div className="top-0 absolute inset-x-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm w-3/4 h-[2px]"></div>
                <div className="top-0 absolute inset-x-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent w-3/4 h-px"></div>
                <div className="top-0 absolute inset-x-1/4 bg-gradient-to-r from-transparent via-sky-400 to-transparent blur-sm w-2/4 h-[5px]"></div>
                <div className="top-0 absolute inset-x-1/4 bg-gradient-to-r from-transparent via-sky-400 to-transparent w-1/4 h-px"></div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <span>Next js SaaS Development Framework</span>
            <div className="flex flex-col justify-center items-center overflow-hidden">
              <div className="relative w-full h-5">
                <div className="top-0 absolute inset-x-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm w-3/4 h-[2px]"></div>
                <div className="top-0 absolute inset-x-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent w-3/4 h-px"></div>
                <div className="top-0 absolute inset-x-1/4 bg-gradient-to-r from-transparent via-sky-400 to-transparent blur-sm w-2/4 h-[5px]"></div>
                <div className="top-0 absolute inset-x-1/4 bg-gradient-to-r from-transparent via-sky-400 to-transparent w-1/4 h-px"></div>
              </div>
            </div>
          </div>
        </H1>
        <P className="!mt-0 text-[#94a3b8]">
          A fullstack Nextjs, typescript, shadcn starter kit to {"launch"}
          <br /> any production level saas application with a collection of
          common saas strategies and platform to suit your needs
        </P>
        <Link
          href="/dashboard"
          className="bg-[#16597e] p-4 rounded-md font-bold text-black hover:text-black"
        >
          Get Started For Free
        </Link>
        <div className="flex justify-center items-center w-full group">
          <div
            className={`absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] bg-sky-500`}
          ></div>
          {techStack.map((stack, index) => {
            const { link, src, name } = stack;
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-slate-900/5 hover:bg-slate-900/10 dark:hover:bg-white/10 dark:bg-white/5 backdrop-blur m-2 p-2 sm:p-4 md:p-6 rounded-lg w-40 transition cursor-default align-middle hover:scale-[1.02]"
              >
                <a rel="noreferrer" href={link} target="_blank">
                  <div>
                    <div>
                      <img
                        className="h-10 md:h-12 object-cover"
                        src={src}
                        alt={name}
                      />
                      <div className="sm:flex justify-center hidden opacity-50 mx-auto font-medium text-center text-muted-foreground text-xs truncate">
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
          className="border-4 m-10 border-black rounded-lg object-contain"
        />
      </div>
    </Section>
  );
};
