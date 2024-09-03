"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Post } from "@prisma/client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/_ui/primitives/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/_ui/primitives/dropdown-menu";
import { toast } from "@/components/_ui/primitives/use-toast";
import { Icons } from "@/components/_ui/icons";

async function deletePost(postId: string) {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });

  if (!response?.ok) {
    toast({
      title: "Something went wrong.",
      description: "Your post was not deleted. Please try again.",
      variant: "destructive",
    });
  }

  return true;
}

async function publishPost(postId: string) {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      published: true,
    }),
  });

  if (!response?.ok) {
    toast({
      title: "Something went wrong.",
      description: "Your post was not published. Please try again.",
      variant: "destructive",
    });
  }

  return true;
}

interface PostOperationsProps {
  post: Pick<Post, "id" | "title" | "published">;
}

export function PostOperations({ post }: PostOperationsProps) {
  const router = useRouter();
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false);

  const [showPublishAlert, setShowPublishAlert] =
    React.useState<boolean>(false);
  const [isPublishLoading, setIsPublishLoading] =
    React.useState<boolean>(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted">
          <Icons.ellipsis className="h-4 w-4" />
          <span className="sr-only">Open</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => setShowPublishAlert(true)}>
            Publish
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={`/editor/${post.id}`} className="flex w-full">
              Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex cursor-pointer items-center text-destructive focus:text-destructive"
            onSelect={() => setShowDeleteAlert(true)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this post?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async (event) => {
                event.preventDefault();
                setIsDeleteLoading(true);

                const deleted = await deletePost(post.id);

                if (deleted) {
                  setIsDeleteLoading(false);
                  setShowDeleteAlert(false);
                  router.refresh();
                }
              }}
              className="bg-red-600 focus:ring-red-600"
            >
              {isDeleteLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.trash className="mr-2 h-4 w-4" />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={showPublishAlert} onOpenChange={setShowPublishAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to Publish this post?
            </AlertDialogTitle>
            <AlertDialogDescription>
              By Selecting Publish, the post will be made available to the
              public and can be viewed on the landing page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async (event) => {
                event.preventDefault();
                setIsPublishLoading(true);

                const published = await publishPost(post.id);

                if (published) {
                  setIsPublishLoading(false);
                  setShowPublishAlert(false);
                  router.refresh();
                }
              }}
              className="bg-green-600 focus:ring-green-600"
            >
              {isPublishLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.laptop className="mr-2 h-4 w-4" />
              )}
              <span>Publish</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
