import { db } from "@/lib/db";
import {
  CreatePostInputInteface,
  CreatePostInterface,
  PatchPostInterface,
  PostInterface,
  PublishPostInterface,
} from "@/server/interface/posts";

export class PostRepository {
  static async findPostsByUserId(userId: string): Promise<PostInterface[]> {
    return await db.post.findMany({
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      where: {
        authorId: userId,
      },
    });
  }

  static async countPostsByUserId(userId: string): Promise<number> {
    return await db.post.count({
      where: { authorId: userId },
    });
  }

  static async createPost(
    userId: string,
    body: CreatePostInputInteface
  ): Promise<CreatePostInterface> {
    return await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
      select: {
        id: true,
      },
    });
  }

  static async deletePost(postId: string): Promise<void> {
    await db.post.delete({
      where: {
        id: postId,
      },
    });
  }

  static async updatePost(
    postId: string,
    body: PatchPostInterface
  ): Promise<void> {
    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });
  }

  static async publishPost(
    postId: string,
    body: PublishPostInterface
  ): Promise<void> {
    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        published: body.published,
      },
    });
  }
}
