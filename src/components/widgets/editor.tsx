"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EditorJS from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post } from "@prisma/client";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import * as z from "zod";

import "@/lib/styles/editor.css";
import { cn } from "@/lib/utils";
import { postPatchSchema } from "@/lib/validations/post";
import { Button, buttonVariants } from "@/components/_ui/primitives/button";
import { toast } from "@/components/_ui/primitives/use-toast";
import { Icons } from "@/components/_ui/icons";

interface EditorProps {
  content: Pick<Post, "id" | "title" | "content" | "published">;
  type: "posts" | "guides" | "docs";
}

type FormData = z.infer<typeof postPatchSchema>;

export function Editor({ content, type }: EditorProps) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  });
  const ref = React.useRef<EditorJS>();
  const router = useRouter();
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const [isPub, setIsPub] = React.useState<boolean>(content?.published);

  const initializeEditor = React.useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;

    const body = postPatchSchema.parse(content);

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        data: body.content,
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      });
    }
  }, [content]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  async function onSubmit(data: FormData) {
    try {
      setIsSaving(true);

      const blocks = await ref.current?.save();

      const response = await fetch(`/api/${type}/${content.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          content: blocks,
          published: content.published,
        }),
      });

      setIsSaving(false);

      if (!response?.ok) {
        return toast({
          title: "Something went wrong.",
          description: "Your post was not saved. Please try again.",
          variant: "destructive",
        });
      }

      router.refresh();

      return toast({
        description: "Your post has been saved.",
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (!isMounted) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, (errors) => console.error(errors))}>
      <div className="gap-10 grid w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-10">
            <Link
              href={`/content/${type}`}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <>
                <Icons.chevronLeft className="mr-2 w-4 h-4" />
                Back
              </>
            </Link>
            <p className="text-muted-foreground text-sm">
              {content.published ? "Published" : "Draft"}
            </p>
          </div>
          <Button type="submit" className={cn(buttonVariants())}>
            {isSaving && (
              <Icons.spinner className="mr-2 w-4 h-4 animate-spin" />
            )}
            Save it
          </Button>
        </div>
        <div className="mx-auto w-[800px] dark:prose-invert prose prose-stone">
          <TextareaAutosize
            autoFocus
            id="title"
            defaultValue={content.title}
            placeholder="Post title"
            className="bg-transparent w-full font-bold text-5xl overflow-hidden appearance-none resize-none focus:outline-none"
            {...register("title")}
          />
          <input
            type="checkbox"
            id="publish"
            checked={isPub}
            {...register("published", {
              onChange: (e) => setIsPub(e.target.checked),
            })}
            className="hidden"
          />
          <label className="hidden" htmlFor="publish">
            publish
          </label>
          <div id="editor" className="min-h-[500px]" />
          <p className="text-gray-500 text-sm">
            Use{" "}
            <kbd className="bg-muted px-1 border rounded-md text-xs uppercase">
              Tab
            </kbd>{" "}
            to open the command menu.
          </p>
        </div>
      </div>
    </form>
  );
}
