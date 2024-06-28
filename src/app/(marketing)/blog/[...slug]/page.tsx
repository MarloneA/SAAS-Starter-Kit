import { notFound } from "next/navigation";
import { allAuthors, allPosts } from "./../../../../../generated/index.mjs";

import { Mdx } from "@/mdx-components";

import "@/styles/mdx.css";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// import { env } from "@/env.mjs"
import { absoluteUrl, cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/_ui/button";
import { Icons } from "@/components/icons";
import { DocsPager } from "@/components/pager";
import { DocsPageHeader } from "@/components/page-header";
import { DashboardTableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/lib/toc";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

// async function getDocFromParams(params) {
//   const slug = params.slug?.join("/") || "";
//   const doc = allPosts.find((post) => post.slugAsParams === slug);

//   if (!doc) {
//     null;
//   }

//   return doc;
// }

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const url = process.env.NEXTAUTH_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  // const doc = await getDocFromParams(params);

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  );

  // const toc = await getTableOfContents(post.body.raw);

  return (
    <article className="relative py-6 lg:py-10 max-w-3xl container">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 w-4 h-4" />
        See all posts
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-muted-foreground text-sm"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="inline-block mt-2 font-heading text-4xl lg:text-5xl leading-tight">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="flex space-x-4 mt-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  className="flex items-center space-x-2 text-sm"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="bg-white rounded-full"
                  />
                  <div className="flex-1 text-left leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-[12px] text-muted-foreground">
                      @{author.twitter}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="bg-muted my-8 border rounded-md transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 w-4 h-4" />
          See all posts
        </Link>
      </div>
      {/* <hr className="my-4 md:my-6" /> */}
      {/* <div className="xl:block hidden text-sm">
        <div className="top-16 sticky -mt-10 pt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div> */}
    </article>
  );
}

{
  /* <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} /> */
}
// <hr className="my-4 md:my-6" />
// <DocsPager doc={doc} />
