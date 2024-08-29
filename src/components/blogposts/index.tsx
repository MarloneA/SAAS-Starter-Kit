import Image from "next/image";
import Link from "next/link";
import { allPosts } from "../../../generated/index.mjs";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";
import { H2, P } from "../_ui/typography";
import { Button } from "../_ui/button";

const BlogPosts = () => {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="flex flex-col items-center justify-center">
      <section
        id="pricing"
        className="flex flex-col justify-center items-center gap-4 m-10"
      >
        <H2>From the Blog</H2>
        <P>Read the latest articles from our blogs</P>
      </section>

      <div className="gap-10 grid sm:grid-cols-3 max-w-6xl container">
        {posts.slice(0, 3).map((post, index) => (
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
      <Button className="max-w-48" variant="secondary">
        <Link href="/blog">More Articles</Link>
      </Button>
    </div>
  );
};

export default BlogPosts;
