import { notFound } from "next/navigation";
import { allDocuments as allDocs } from "../../../../../generated/index.mjs";

import { getTableOfContents } from "@/lib/toc";
import { Mdx } from "@/mdx-components";
import { DocsPageHeader } from "@/components/widgets/page-header";
import { DocsPager } from "@/components/widgets/pager";
import { DashboardTableOfContents } from "@/components/widgets/toc";

import "@/lib/styles/mdx.css";
import { Metadata } from "next";

// import { env } from "@/env.mjs";
import { absoluteUrl } from "@/lib/utils";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams(params);

  if (!doc) {
    return {};
  }

  const url = process.env.NEXTAUTH_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", doc.description ?? doc.title);
  ogUrl.searchParams.set("type", "Documentation");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_300px] py-6 lg:py-10">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        <DocsPager doc={doc} />
      </div>
      <div className="xl:block hidden text-sm">
        <div className="top-16 sticky -mt-10 pt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
