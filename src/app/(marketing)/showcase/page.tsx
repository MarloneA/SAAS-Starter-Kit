import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";

export const metadata = {
  title: "Project Showcase",
};

export default async function BlogPage() {
  const user = await auth();

  return (
    <div className="py-6 lg:py-10 max-w-8xl container">
      <div className="flex md:flex-row flex-col md:justify-between items-start gap-4 md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl lg:text-5xl tracking-tight">
            Project Showcase
          </h1>
          <p className="text-muted-foreground text-xl">
            A collection of products and projects built using LiveKit.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {projects?.length ? (
        <div className="gap-10 grid sm:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project._id}
              className="relative flex flex-col space-y-2 group"
            >
              <Link href={project.url}>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={804}
                    height={452}
                    className="bg-muted border rounded-md transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="font-extrabold text-2xl my-4">
                  {project.title}
                </h2>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No projects published.</p>
      )}
    </div>
  );
}

export const projects = [
  {
    id: "2",
    url: "https://kaizen-theta.vercel.app/",
    title: "Kaizen",
    description:
      "Kaizen is a bug reporting and workflow management application that allows companies to resolve feedback loop nightmares ",
    githubUrl: "https://github.com/MarloneA/Kaizen",
    featured: true,
    layout: "semi",
    image: "/images/projects/kaizen/slide1.png",
  },
  {
    id: "3",
    url: "https://snag-7pq88t048-marloneas-projects.vercel.app/",
    title: "Snag AI",
    description:
      "Snag allows you to use Ai to generate video summarise and search and interact with comment section data. Snag Ai is powered by OpenAI",
    githubUrl: "https://github.com/MarloneA/snag-ai",
    featured: true,
    layout: "semi",
    image: "/images/projects/snag/slide1.png",
  },
  {
    id: "4",
    url: "https://fullstack-nextjs-weld.vercel.app",
    title: "Rall-y",
    description:
      "A zero bloat project management suit of tools that will allow you to easily work through your timelines without having to deal with clutter",
    githubUrl: "https://github.com/MarloneA/Fullstack-Nextjs",
    featured: true,
    layout: "full",
    image: "/images/projects/rally/slide1.png",
  },
  {
    id: "4",
    url: "https://groove-phi.vercel.app/",
    title: "Groove",
    description:
      "An app build to provide accurate music playlists and recommendations based on your taste",
    githubUrl: "https://github.com/MarloneA/groove",
    featured: true,
    layout: "full",
    image: "/images/projects/groove/slide1.png",
  },
  {
    id: "1",
    url: "https://marlone.tech",
    title: "Portfolio Site",
    description: `A collection of App Builders to bootstrap your projects. The boilerplate has all you need to build your SaaS, AI tool, or any other web app and start getting feedback on your product as soon as possible.`,
    githubUrl: "https://github.com/MarloneA/SAAS-Starter-Kit",
    featured: true,
    layout: "full",
    image: "/images/projects/saaskit/port.png",
  },
];
