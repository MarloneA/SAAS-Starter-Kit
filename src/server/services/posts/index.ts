import { verifyCurrentUserHasAccessToPost } from "@/lib/accessControl";
import { RequiresProPlanError } from "@/lib/exceptions";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import {
  CreatePostInputInteface,
  CreatePostInterface,
  PatchPostInterface,
  PostInterface,
  PublishPostInterface,
} from "@/server/interface/posts";
import { PostRepository } from "@/server/repositories/posts";

export class PostService {
  static async getPostsByUserId(userId: string): Promise<PostInterface[]> {
    return await PostRepository.findPostsByUserId(userId);
  }

  static async createPost(
    userId: string,
    body: CreatePostInputInteface
  ): Promise<CreatePostInterface> {
    const subscriptionPlan = await getUserSubscriptionPlan(userId);

    // If the user is on a free plan, check the post limit.
    if (!subscriptionPlan?.isPro) {
      const postCount = await PostRepository.countPostsByUserId(userId);
      if (postCount >= 1000) {
        throw new RequiresProPlanError();
      }
    }

    return await PostRepository.createPost(userId, body);
  }

  static async deletePost(postId: string): Promise<void> {
    // Check if the user has access to this post.
    const hasAccess = await verifyCurrentUserHasAccessToPost(postId);
    if (!hasAccess) {
      throw new Error("Unauthorized");
    }

    // Delete the post using the repository.
    await PostRepository.deletePost(postId);
  }

  static async updatePost(
    postId: string,
    body: PatchPostInterface
  ): Promise<void> {
    // Check if the user has access to this post.
    const hasAccess = await verifyCurrentUserHasAccessToPost(postId);
    if (!hasAccess) {
      throw new Error("Unauthorized");
    }

    // Update the post using the repository.
    await PostRepository.updatePost(postId, body);
  }

  static async publishPost(
    postId: string,
    body: PublishPostInterface
  ): Promise<void> {
    // Check if the user has access to this post.
    const hasAccess = await verifyCurrentUserHasAccessToPost(postId);
    if (!hasAccess) {
      throw new Error("Unauthorized");
    }

    // Update the post using the repository.
    await PostRepository.publishPost(postId, body);
  }
}
