import Image from "next/image";
import Link from "next/link";
import { allPosts } from "./../../../../generated/index.mjs";
import { compareDesc } from "date-fns";

import { formatDate } from "@/lib/utils";
import { auth } from "@/auth";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/_ui/primitives/button";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const user = await auth();

  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="py-6 lg:py-10 max-w-8xl container">
      <div className="flex md:flex-row flex-col md:justify-between items-start gap-4 md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl lg:text-5xl tracking-tight">
            Blog
          </h1>
          <p className="text-muted-foreground text-xl">
            A blog built using Next Mdx. Posts are written in MDX.
          </p>
        </div>
        {user && (
          <Button className="w-fit not-prose" variant="outline">
            <Link
              className="flex items-center gap-1 group"
              href="/content/posts"
            >
              manage content
              <ArrowRight className="group-hover:rotate-45 w-4 transition-all" />
            </Link>
          </Button>
        )}
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="gap-10 grid sm:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="relative flex flex-col space-y-2 group"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="bg-muted border rounded-md transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="font-extrabold text-2xl">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-muted-foreground text-sm">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
