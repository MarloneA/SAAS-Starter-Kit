import { verifyCurrentUserHasAccessToGuide } from "@/lib/accessControl";
import { RequiresProPlanError } from "@/lib/exceptions";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { CreateGuideInputInteface, CreateGuideInterface, PatchGuideInterface, GuideInterface } from "@/server/interface/guides";
import { GuideRepository } from "@/server/repositories/guides";

export class GuideService {
  static async getGuidesByUserId(userId: string): Promise<GuideInterface[]> {
    return await GuideRepository.findGuidesByUserId(userId);
  }

  static async createGuide(userId: string, body: CreateGuideInputInteface): Promise<CreateGuideInterface> {
    const subscriptionPlan = await getUserSubscriptionPlan(userId);

    // If the user is on a free plan, check the guide limit.
    if (!subscriptionPlan?.isPro) {
      const guideCount = await GuideRepository.countGuidesByUserId(userId);
      if (guideCount >= 3) {
        throw new RequiresProPlanError();
      }
    }

    return await GuideRepository.createGuide(userId, body);
  }

  static async deleteGuide(guideId: string): Promise<void> {
    // Check if the user has access to this guide.
    const hasAccess = await verifyCurrentUserHasAccessToGuide(guideId);
    if (!hasAccess) {
      throw new Error("Unauthorized");
    }

    // Delete the guide using the repository.
    await GuideRepository.deleteGuide(guideId);
  }

  static async updateGuide(guideId: string, body: PatchGuideInterface): Promise<void> {
    // Check if the user has access to this guide.
    const hasAccess = await verifyCurrentUserHasAccessToGuide(guideId);
    if (!hasAccess) {
      throw new Error("Unauthorized");
    }

    // Update the guide using the repository.
    await GuideRepository.updateGuide(guideId, body);
  }
}






