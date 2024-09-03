import { verifyCurrentUserHasAccessToDoc } from "@/lib/accessControl";
import { RequiresProPlanError } from "@/lib/exceptions";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { CreateDocInputInteface, CreateDocInterface, PatchDocInterface, DocInterface } from "@/server/interface/docs";
import { DocRepository } from "@/server/repositories/docs";

export class DocService {
  static async getDocsByUserId(userId: string): Promise<DocInterface[]> {
    return await DocRepository.findDocsByUserId(userId);
  }

  static async createDoc(userId: string, body: CreateDocInputInteface): Promise<CreateDocInterface> {
    const subscriptionPlan = await getUserSubscriptionPlan(userId);

    // If the user is on a free plan, check the doc limit.
    if (!subscriptionPlan?.isPro) {
      const docCount = await DocRepository.countDocsByUserId(userId);
      if (docCount >= 3) {
        throw new RequiresProPlanError();
      }
    }

    return await DocRepository.createDoc(userId, body);
  }

  static async deleteDoc(docId: string): Promise<void> {
    // Check if the user has access to this doc.
    const hasAccess = await verifyCurrentUserHasAccessToDoc(docId);
    if (!hasAccess) {
      throw new Error("Unauthorized");
    }

    // Delete the doc using the repository.
    await DocRepository.deleteDoc(docId);
  }

  static async updateDoc(docId: string, body: PatchDocInterface): Promise<void> {
    // Check if the user has access to this doc.
    const hasAccess = await verifyCurrentUserHasAccessToDoc(docId);
    if (!hasAccess) {
      throw new Error("Unauthorized");
    }

    // Update the doc using the repository.
    await DocRepository.updateDoc(docId, body);
  }
}






